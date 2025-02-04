import styles from "./Display.module.css";

function Display() {
  return (
    <input
      type="text"
      placeholder="Enter Food Name"
      className={styles.Display}
    ></input>
  );
}
export default Display;
