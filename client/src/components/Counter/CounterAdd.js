import React from "react";

const CounterAdd = ({ count, addCount }) => {
  return <button onClick={() => addCount(count + 1)}>+</button>;
};

export default CounterAdd;
