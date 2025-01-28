import Container from "./components/Container";
import "./App.css";
import Foodinput from "./components/Foodinput";

function App() {
  return (
    <>
      <Container>
        <Foodinput />
        <h1>inner child 1</h1>
        <h2>inner child 2</h2>
      </Container>
      <Container>
        <h1>inner child 3</h1>
        <h2>inner child 4</h2>
      </Container>
      <Container>
        <h1>inner child 3</h1>
        <h2>inner child 4</h2>
      </Container>
    </>
  );
}

export default App;
