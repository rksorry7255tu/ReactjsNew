import styles from "./fooditems.module.css";
import { useState } from "react";

function Fooditems({ items, bought, handleBuyButton }) {
  let [activeItems, setActiveItems] = useState([]);
  return (
    <ul className="list-group">
      {items.map((item) => (
        <>
          <li className={`list-group-item ${bought && "active"}`}>
            {item}
            <button
              onClick={handleBuyButton}
              className={`${styles.button} btn btn-info `}
            >
              Buy
            </button>
          </li>
        </>
      ))}
    </ul>
  );
}
export default Fooditems;
