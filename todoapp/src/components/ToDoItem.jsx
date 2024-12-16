import { useState } from "react";
import styles from "./todoitem.module.css";
import Todotext from "./todotext";

export default function ToDoItem({ item, tasksList, setList }) {
  const [yes, change] = useState(false);
  const [itemName, nullify] = useState(item);
  function scratch() {
    if (!yes) {
      return styles.itembutton;
    } else {
      return styles.check;
    }
  }

  function deleteItem() {
    tasksList.splice(tasksList.indexOf(item), 1);
    setList(tasksList);
    nullify("");
  }

  return itemName ? (
    <>
      <div className={styles.item}>
        <Todotext item={item} yes={yes} change={change} />
        <hr className={styles.verticalline} />
        <div className={styles.buttonscontainer}>
          <button onClick={() => change(!yes)} className={scratch()}>
            {!yes ? "DONE" : "\u2713"}
          </button>
          <button onClick={deleteItem} className={styles.remove}>
            REMOVE
          </button>
        </div>
      </div>
      <hr className={styles.horizontalline} />
    </>
  ) : (
    ""
  );
}
