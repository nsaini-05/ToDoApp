import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteToDo, updateToDo } from "../../../Actions/todoActions";
import ContentEditable from "react-contenteditable";

export const ToDoItem = (props) => {
  const [todo, setToDo] = useState(props.item);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    todo.title = e.target.value;
    dispatch(updateToDo(props.item._id, todo));
  };

  const handleStateChange = () => {
    todo.status = !todo.status;
    dispatch(updateToDo(props.item._id, todo));
  };

  return (
    <li className="item">
      <input
        type="checkbox"
        id=""
        name=""
        value=""
        onClick={handleStateChange}
        checked={todo.status}
      />

      <ContentEditable
        html={todo.title} // innerHTML of the editable div
        disabled={false} // use true to disable edition
        onChange={handleChange}
        className={todo.status ? " title strike " : "title"}
      />

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
