import Task from "./Task";

function TasksList({ tasks, onDeleteTask }) {
  return (
    <div className="list">
      <ul>
        {tasks.map((task) => (
          <Task
            task={task}
            onDeleteTask={onDeleteTask}
            // onToggleItem={onToggleItem}
            key={task.id}
          />
        ))}
      </ul>
    </div>
  );
}

export default TasksList;
