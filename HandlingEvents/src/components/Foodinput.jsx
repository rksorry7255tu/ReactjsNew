import styles from "./Foodinput.module.css";

function Foodinput({ handleKeyDown }) {
  return (
    <input
      type="text"
      placeholder="Enter food Item here "
      className={`${styles.Foodinput} `}
      onKeyDown={handleKeyDown}
    />
  );
}
export default Foodinput;
