import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const handleAddOnClick = () => {
    const add = count + 1;
    setCount(add);
  };
  const handleSubOnClick = () => {
    const sub = count - 1;
    setCount(sub);
  };
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleAddOnClick}>add</button>
      <button onClick={handleSubOnClick}>sub</button>
    </div>
  );
};

export default Counter;
