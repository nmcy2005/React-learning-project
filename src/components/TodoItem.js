import React from "react";

function TodoItem(props) {
  return (
    <div className="todo-item">
      <input type="checkbox" onChange={() => props.handleChange(props.id)} />
      <p>{props.desc}</p>
      <p>{props.time}</p>
    </div>
  );
}

export default TodoItem;
