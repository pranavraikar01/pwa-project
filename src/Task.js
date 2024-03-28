function Task({ task, onDeleteTask }) {
  return (
    <>
      <li className="list-item">
        {task.taskDescription}
        <span className="datetime">{task.taskDateTime}</span>
        <button onClick={() => onDeleteTask(task.id)}>Mark as read</button>
      </li>
    </>
  );
}

export default Task;
