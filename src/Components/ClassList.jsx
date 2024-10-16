import { useContext } from "react";
import { AuthContext } from "../store/AuthContext";
import useClassList from "../hooks/useClassList";
import Cart from "./Cart";
import Shimmer from "./Shimmer";

const ClassList = () => {  
  
  useClassList();

  
  const { classes } = useContext(AuthContext);
  console.log(classes);

  
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
          
        )}
      
    </div>
    </>
  );
};

export default ClassList;
