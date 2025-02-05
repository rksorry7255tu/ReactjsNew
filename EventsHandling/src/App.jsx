import { useState } from "react";
import "./App.css";
import Events from "./components/Events";
import Counter from "./components/Counter";

function App() {
  // const handleClick = (event) => {
  //   alert("on mouse over");
  // };
  // const addition = (a) => {
  //   alert(a + 10);
  // };
  // const [text, setText] = useState("hi");
  // const handleOnchange = (event) => {
  //   console.log(event.target.value);
  //   setText(event.target.value);
  // };

  return (
    <>
      <div>
        {/* <Events
          handleClick={handleClick}
          addition={addition}
          handleOnchange={handleOnchange}
          text={text}
        /> */}
      </div>
      <Counter
        handleAddOnClick={handleAddOnClick}
        handleSubOnClick={handleSubOnClick}
        count={count}
      />
    </>
  );
}

export default App;
