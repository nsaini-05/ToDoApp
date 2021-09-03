import React from "react";

export const ToDoItem = () => {
  return (
    <li class="item">
      <input type="checkbox" id="" name="" value="" />
      <span> I am to do </span>
      <button className="delete-card">
        <ion-icon name="trash-outline" class="icon  "></ion-icon>
      </button>
    </li>
  );
};

export default ToDoItem;
