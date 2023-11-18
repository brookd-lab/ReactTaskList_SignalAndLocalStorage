import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const amount = 25;

  const decrementCount = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const incrementCount = (amount) => {
    setCount(prevCount => prevCount + amount);
  }

  return (
    <div className="App Container">
      <h3>Count: {count}</h3>
      <button
        className="btn btn-success btn-sm"
        onClick={() => setCount((prevCount) => prevCount + 1)}
      >
        Increment
      </button>
      <button
        className="btn btn-info btn-sm"
        onClick={decrementCount}
      >
        Decrement
      </button>
      <button className="btn btn-primary btn-sm" onClick={() => incrementCount(amount)}>Increment By {amount}</button>
    </div>
  );
};

export default Counter;
