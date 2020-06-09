import React from "react";

class AddTodoItem extends React.Component {
  render() {
    return (
      <div className="add-item-container">
        <div className="add-item-input">
          <input id="input-left" type="text" placeholder="Description"></input>
          <input id="input-right" type="text" placeholder="Until"></input>
        </div>
        <div className="add-item-submit">
          <button>Add</button>
        </div>
      </div>
    );
  }
}

export default AddTodoItem;
