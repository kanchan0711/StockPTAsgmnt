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

  const { data, error, isLoading } = useQuery(
    ['classes', accessToken],  
    () => fetchClasses(accessToken), 
    {
      enabled: !!accessToken,  
      onSuccess: (data) => {
        setClasses(data);  
      },
      refetchOnWindowFocus: true,  
    }
  );

  return { data, error, isLoading };
};

export default useClassList;
