import axios from "axios";
const url = "localhost:5000/todos";

const fetchToDoList = () => axios.get(url);
