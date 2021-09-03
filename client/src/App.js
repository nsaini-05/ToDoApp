import React from "react";
import "./App.css";
import Form from "./components/Form/Form";
import ToDos from "./components/ToDos/ToDos";
export const App = () => {
  return (
    <section className="main">
      <div className="container">
        <h1 className="main-heading">To Do App</h1>
        <Form />
        <ToDos />
      </div>
    </section>
  );
};

export default App;
