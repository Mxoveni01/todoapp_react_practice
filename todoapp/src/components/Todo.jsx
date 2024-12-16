import { useState } from "react";
import ToDoItem from "./ToDoItem";
import styles from "./Todo.module.css";

export default function Todo() {
  const [task, setTask] = useState("");
  const [tasksList, setList] = useState([]);
  function handleSubmit(e) {
    e.preventDefault();
    if (task) {
      if (!tasksList.includes(task)) {
        setList([...tasksList, task]);
      } else {
        alert("You already have the task in your list of tasks.");
      }
    }
    console.log(tasksList);
    setTask("");
  }

  return (
    <>
      <form className={styles.list} onSubmit={handleSubmit}>
        <div className={styles.container}>
          <input
            className={styles.inputBar}
            onChange={(e) => setTask(e.target.value)}
            type="text"
            value={task}
            placeholder="Add a task..."
          />
          <button className={styles.addButton}>ADD</button>
        </div>
      </form>
      <div className={styles.itemsContainer}>
        {tasksList.map((item) => (
          <ToDoItem
            key={item}
            item={item}
            tasksList={tasksList}
            setList={setList}
          />
        ))}
      </div>
    </>
  );
}
