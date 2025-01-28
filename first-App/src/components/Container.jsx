import styles from "./Container.module.css";
function Container(props) {
  return (
    <div className={styles.Container}>
      {props.children}
      <button
        className={`${styles.button} btn btn-info`}
        onClick={() => console.log("Click me button clicked")}
      >
        click me
      </button>
      <button
        type="button"
        class={`${styles.button} btn btn-success`}
        onClick={() => console.log("Success button clicked")}
      >
        Success
      </button>
    </div>
  );
}
export default Container;
