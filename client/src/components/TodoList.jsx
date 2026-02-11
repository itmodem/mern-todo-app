import React from "react";
import TodoItem from "./TodoItem";
const TodoList = () => {
  const todos = ["Learn React", "Build Todo App"];
  return (
    <ul>
      {todos.map((todos, idx) => (
        <TodoItem key={idx} title={todos} />
      ))}
    </ul>
  );
};

export default TodoList;
