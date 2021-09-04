import React, { useState } from "react";
import { createToDo } from "../../Actions/todoActions";
import { useDispatch } from "react-redux";

export const Form = () => {
  const dispatch = useDispatch();
  const [taskData, setTaskData] = useState({ title: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createToDo(taskData));
    setTaskData({ title: "" });
  };

  return (
    <div className="form">
      <form className="cta-form">
        <input
          type="text"
          placeholder="Add To Do"
          onChange={(e) => setTaskData({ title: e.target.value })}
          value={taskData.title}
          required
        />
        <button type="submit" className="btn btn--form" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
