import React from "react";
import { useDispatch } from "react-redux";
import { deleteToDo } from "../../../Actions/todoActions";

export const ToDoItem = (props) => {
  const dispatch = useDispatch();

  return (
    <li className="item">
      <input type="checkbox" id="" name="" value="" />
      <span> {props.item.title} </span>
      <button
        className="delete-card"
        onClick={() => dispatch(deleteToDo(props.item._id))}
      >
        <ion-icon name="trash-outline" class="icon  "></ion-icon>
      </button>
    </li>
  );
};

export default ToDoItem;
