import styles from "./Button.module.css";
function Buttons({ buttons }) {
  return (
    <div className={styles.butContainer}>
      {buttons.map((button) => (
        <button className={styles.button}>{button}</button>
      ))}
    </div>
  );
}
export default Buttons;
