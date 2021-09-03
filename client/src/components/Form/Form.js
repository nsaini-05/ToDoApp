import React from "react";

export const Form = () => {
  return (
    <div className="form">
      <form className="cta-form">
        <input type="text" placeholder="Add To Do" id="full-name" required />
        <button type="submit" className="btn btn--form">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
