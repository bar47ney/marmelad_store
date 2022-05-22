import React from "react";

const CounterSub = ({ count, subCount }) => {
  console.log(count);
  return <button onClick={() => subCount(count - 1)}>-</button>;
};

export default CounterSub;
