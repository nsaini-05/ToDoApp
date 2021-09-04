import axios from "axios";
const url = "http://localhost:5000/todos";

export const fetchToDos = () => axios.get(url);

export const createToDo = (todo) => axios.post(url, todo);

export const deleteToDo = (id) => axios.delete(`${url}/${id}`);

export const updateToDo = (id, updatedToDO) =>
  axios.patch(`${url}/${id}`, updatedToDO);
