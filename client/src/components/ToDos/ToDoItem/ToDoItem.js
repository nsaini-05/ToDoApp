import React from "react";

export const ToDoItem = (props) => {
  return (
    <li className="item">
      <input type="checkbox" id="" name="" value="" />
      <span> {props.item.title} </span>
      <button className="delete-card">
        <ion-icon name="trash-outline" class="icon  "></ion-icon>
      </button>
    </li>
  );
};

export default ToDoItem;
