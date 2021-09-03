import React from "react";
import ToDoItem from "./ToDoItem/ToDoItem";
export const ToDos = () => {
  return (
    <div className="list-container">
      <ul className="list">
        <ToDoItem />
      </ul>
    </div>
  );
};

export default ToDos;
