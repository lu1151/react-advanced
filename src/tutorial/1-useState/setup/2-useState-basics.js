import React, { useState } from 'react';

const UseStateBasics = () => {
  // console.log(useState("hello"));
  // const value = useState(1)[0];
  // const handler = useState(1)[1];
  // console.log(value,handler);

  const [apple, setApple] = useState("random title")

  const handleClick = () => {
    if (apple == "random title") {
      setApple("hello");
    } else {
      setApple("random title")
    }
  };

  return (
    <>
      <h1>{apple}</h1>
      <button className="btn" onClick={handleClick}>
        change title
      </button>
    </>
  )
};

export default UseStateBasics;
