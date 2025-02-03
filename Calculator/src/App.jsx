import { Button } from "bootstrap";
import "./App.css";
import Display from "./components/Display";

function App() {
  let buttons = [
    "c",
    "1",
    "2",
    "3",
    "4",
    "-",
    "5",
    "6",
    "+",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div className="container">
      <Display />
      <Button buttons={buttons} />
    </div>
  );
}

export default App;
