import React from "react";
import TodoItem from "./TodoItem";
import todosData from "../todosData";

class TodoList extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todosData,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    this.setState((old_state) => {
      const new_state = old_state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
      return {
        new_state,
      };
    });
  }

  render() {
    const todos = this.state.todos.map((todo) => (
      <TodoItem
        key={todo.id}
        desc={todo.desc}
        time={todo.time}
        id={todo.id}
        completed={todo.completed}
        handleChange={this.handleChange}
      />
    ));
    return <div>{todos}</div>;
  }
}

export default TodoList;
