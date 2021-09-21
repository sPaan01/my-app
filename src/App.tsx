import React from "react";
import "./App.css";

import Todo from "../components/createTodo";
import TodoTable from "../components/todoTable";

const App = () => {
  return (
    <div>
      <Todo />
      <TodoTable />
    </div>
  );
};

export default App;
