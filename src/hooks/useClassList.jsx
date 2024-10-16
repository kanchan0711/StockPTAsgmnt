import axios from 'axios';
import { useContext } from 'react';
import { AuthContext } from '../store/AuthContext';
import { useQuery } from 'react-query';
import { LISTING_APP } from '../utils/Constant';

const fetchClasses = async (accessToken) => {
  const response = await axios.get(LISTING_APP, {
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (response.status === 200) {
    return response.data?.data?.data;
  } else {
    throw new Error('Failed to fetch classes');
  }
};

const useClassList = () => {
  const { accessToken, setClasses } = useContext(AuthContext);

  // Use the useQuery hook for data fetching and caching
  const { data, error, isLoading } = useQuery(
    ['classes', accessToken],  // Unique key for the query, includes accessToken as a dependency
    () => fetchClasses(accessToken),  // The function that fetches the data
    {
      enabled: !!accessToken,  // Fetching is only enabled if accessToken exists
      onSuccess: (data) => {
        setClasses(data);  // Optionally, update the global state with fetched data
      },
      refetchOnWindowFocus: true,  // Refetch data when window is focused (React Query default behavior)
    }
  );

  return { data, error, isLoading };
};

export default useClassList;
