import React from "react";
import { useSelector } from "react-redux";

import ToDoItem from "./ToDoItem/ToDoItem";
export const ToDos = () => {
  const todos = useSelector((state) => state.todos);

  return (
    <div className="list-container">
      <ul className="list">
        {todos.length !== 0 ? (
          todos.map((todo) => <ToDoItem item={todo} key={todo._id} />)
        ) : (
          <></>
        )}
      </ul>
    </div>
  );
};

export default ToDos;
