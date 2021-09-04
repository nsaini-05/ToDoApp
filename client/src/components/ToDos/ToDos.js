import React from "react";
import { useSelector } from "react-redux";

import ToDoItem from "./ToDoItem/ToDoItem";
export const ToDos = () => {
  const todos = useSelector((state) => state.todos);

  return (
    <div className="list-container">
      {todos.length !== 0 ? (
        todos.map((todo) => (
          <ul className="list">
            <ToDoItem item={todo} key={todo._id} />
          </ul>
        ))
      ) : (
        <></>
      )}
    </div>
  );
};

export default ToDos;
