import React from "react";

const Events = ({ handleClick, addition, handleOnchange, text }) => {
  return (
    <div>
      <h1>We are learning events</h1>
      <button onClick={handleClick}>Click this button</button>
      <button onClick={() => addition(10)}>Button 2</button>
      <input
        onChange={handleOnchange}
        type="text"
        placeholder="Enter some message"
      />
      <h1>{text}</h1>
    </div>
  );
};

export default Events;
