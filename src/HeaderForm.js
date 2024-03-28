import { useState } from "react";

function HeaderForm({ onAddTasks }) {
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDateTime, setTaskDateTime] = useState("");

  function handleSubmit(e) {
    if (!taskDescription || !taskDateTime) return;
    e.preventDefault();

    const newTask = {
      taskDescription,
      taskDateTime,
      id: Date.now(),
    };

    console.log(newTask);

    onAddTasks(newTask);
    setTaskDescription("");
    setTaskDateTime("");
  }

  return (
    <div className="container">
      <h1>To do list</h1>

      <form className="input-wrapper" onSubmit={handleSubmit}>
        <input
          type="text"
          id="taskInput"
          placeholder="Enter your task..."
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
        />
        <input
          type="datetime-local"
          id="taskDateTime"
          placeholder="Enter date and time..."
          value={taskDateTime}
          onChange={(e) => setTaskDateTime(e.target.value)}
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default HeaderForm;
