import "./style.css";

function TodoItem(props) {
  return (
    <div className={`todo ${props.todo.isCompleted ? "complete" : ""}`}>
      {props.todo.text}
      <div>
        <button onClick={() => props.completeTodo(props.index)}>
          Complete
        </button>
        <button onClick={() => props.deleteTodo(props.index)}>x</button>
      </div>
    </div>
  );
}

export default TodoItem;
