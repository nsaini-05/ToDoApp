import axios from "axios";
const url = "http://localhost:5000/todos";

export const fetchToDos = () => axios.get(url);

export const createToDo = (todo) => axios.post(url, todo);
