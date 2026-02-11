import React from "react";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";
const App = () => {
  return (
    <div>
      <div>
        <h1>MERN Todo App</h1>
        <TodoForm />
        <TodoItem />
      </div>
    </div>
  );
};

export default App;
