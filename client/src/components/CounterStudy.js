import React, { useState } from "react";
import MyButton from "./MyButton/MyButton";

const CounterStudy = () => {
  const [count, setCount] = useState(0);

  const inc = () => {
    setCount(count + 1);
  };

  const dec = () => {
    setCount(count - 1);
  };

  return (
    <>
      <h1>{count}</h1>
      <MyButton action={inc}>+</MyButton>
      <MyButton action={dec}>-</MyButton>
    </>
  );
};

export default CounterStudy;
