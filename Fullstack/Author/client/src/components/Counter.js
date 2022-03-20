import React, { useState } from "react";

const Counter = () => {
  // Set the initial count state to zero, 0
  const [count, setCount] = useState(0);

  // Create handleIncrement event handler
  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };

  //Create handleDecrement event handler
  const handleDecrement = () => {
    setCount(prevCount => prevCount - 1);
  };
  return (
    <div>
      <div>
      {
          count == 1?
          <p>
         Likes: {count} 
          <button onClick={() => setCount(0)}>Dislike</button>
          </p>
         
          : <p>
          {count} likes yet.
          <button onClick={handleIncrement}>Like</button>
          </p>
         
         
      }
        {/* <button onClick={handleDecrement}>Dislike</button>
        <h6>Count is {count}</h6>
        <button onClick={handleIncrement}>Like</button>
        <button onClick={() => setCount(0)}>Reset</button> */}
      </div>
     
    </div>
  );
}

export default Counter;