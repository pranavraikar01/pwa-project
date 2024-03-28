import { useState } from "react";
import HeaderForm from "./HeaderForm";
import TasksList from "./TasksList";
export default function App() {
  const [tasks, setTasks] = useState([]);
  function handleAddTasks(task) {
    setTasks((tasks) => [...tasks, task]);
    console.log(tasks);
  }
  function handleDeleteItem(id) {
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  }
  return (
    <div>
      <HeaderForm onAddTasks={handleAddTasks} />
      <TasksList tasks={tasks} onDeleteTask={handleDeleteItem} />
    </div>
  );
}
