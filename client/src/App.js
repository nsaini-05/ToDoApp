import React, { useEffect } from "react";
import "./App.css";
import Form from "./components/Form/Form";
import ToDos from "./components/ToDos/ToDos";
import { useDispatch } from "react-redux";
import { getToDos } from "./Actions/todoActions";

export const App = () => {
  const dispatch = useDispatch(getToDos());
  useEffect(() => {
    dispatch(getToDos());
  }, [dispatch]);
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
