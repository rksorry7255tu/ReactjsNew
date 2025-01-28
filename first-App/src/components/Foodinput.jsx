import styles from "./Foodinput.module.css";
function Foodinput() {
  const handleOnChange = (event) => {
    console.log(event.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Enter food items here"
      className={styles.fooditem}
      onChange={handleOnChange}
    ></input>
  );
}
export default Foodinput;
