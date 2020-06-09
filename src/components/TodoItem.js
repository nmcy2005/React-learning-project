import React from "react";

function TodoItem(props) {
  const completedStyle = {
    fontStyle: "italic",
    textDecoration: "line-through",
  };

  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={props.completed}
        onChange={() => props.handleChange(props.id)}
      />
      <p style={props.completed ? completedStyle : null}>{props.desc}</p>
      <p>{props.completed ? "finished" : props.time}</p>
    </div>
  );
}

export default TodoItem;
