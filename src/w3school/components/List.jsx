import React, { useEffect, useState } from "react";

const List = () => {

   // State using useState hook
   const [count, setCount] = useState(0);
   
   // Effect using useEffect hook
  useEffect(() => {
    document.title = `Count: ${count}`;

    // This cleanup function will be called when the component unmounts
    return () => {
      document.title = 'React App'; // Reset title
    };
  }, [count]); // Dependency array, useEffect will re-run whenever 'count' changes

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };


  const data = [
    {
      name: "ram1",
      job: "react js",
    },
    {
      name: "ram1",
      job: "react js",
    },
    {
      name: "ram1",
      job: "react js",
    },
  ];

  


  
  return (
    <>

<div>
      <h1>Counter</h1>
      <p>Current Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>

      <ul>
        {data &&
          data.length > 0 &&
          data.map((value, index, array) => (
            <li key={index}>
              {value.name} , {value.job} , {index}, {array+""} 
            </li>
          ))}
      </ul>
    </>
  );
};

export default List;
