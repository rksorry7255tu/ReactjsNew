import { useState } from "react";
import "./App.css";
import Container from "./components/Container";
import Foodheading from "./components/Foodheading";
import Foodinput from "./components/Foodinput";
import Fooditems from "./components/Fooditems";

function App() {
  let [foodItems, setFoodItems] = useState([
    "salad",
    "Lichi",
    "Papaya",
    "Banana",
    "Orange",
  ]);

  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      event.target.value = "";
      let newItems = [...foodItems, newFoodItem];
      setFoodItems(newItems);
      console.log("Food value entered is " + newFoodItem);
    }
    console.log(event);
  };

  return (
    <>
      <Container>
        <Foodheading />

        <Foodinput handleKeyDown={onKeyDown} />

        <Fooditems
          items={foodItems}
          handleBuyButton={() => console.log("clicked")}
        />
      </Container>
    </>
  );
}

export default App;
