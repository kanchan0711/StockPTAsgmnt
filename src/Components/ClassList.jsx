import { useContext } from "react";
import { AuthContext } from "../store/AuthContext";
import useClassList from "../hooks/useClassList";
import Cart from "./Cart";
import Shimmer from "./Shimmer";

const ClassList = () => {  
  // Use the custom hook to fetch classes
  useClassList();

  // Access the classes from AuthContext
  const { classes } = useContext(AuthContext);
  console.log(classes);

  // Check if classes exist before trying to map over them
  return (
    <>
    <h1 className=" text-center m-8 text-3xl font-bold">Available classes</h1>
    <div className="lg:flex lg:flex-wrap lg:gap-10 justify-center ">


     
        {classes && classes.length > 0 ? (
          classes.map((classItem, index) => (
            <Cart key={index} classes={classItem} />
          ))
        ) : (
          <div className="lg:flex lg:flex-wrap lg:gap-10 justify-center ">
             <Shimmer/>
             <Shimmer/>
          </div>
          // Handle the case where there are no classes
        )}
      
    </div>
    </>
  );
};

export default ClassList;
