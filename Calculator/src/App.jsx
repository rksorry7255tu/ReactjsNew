import styles from "./App.module.css";
import Buttons from "./components/Button";
import Display from "./components/Display";

function App() {
  const buttons = [
    "c",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];

  return (
    <div className={styles.container}>
      <Display />
      <Buttons buttons={buttons} />
    </div>
  );
}

export default App;
