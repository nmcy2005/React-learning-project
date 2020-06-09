import React, { Component } from "react";
import TodoList from "./components/TodoList";
import AddTodoItem from "./components/AddTodoItem";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="main">
        <div>
          <AddTodoItem />
        </div>
        <div>
          <TodoList />
        </div>
      </div>
    );
  }
}

export default App;
