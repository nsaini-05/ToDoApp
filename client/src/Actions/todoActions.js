import * as api from "../api/apiCall";
export const getToDos = () => async (dispatch) => {
  try {
    const { data } = await api.fetchToDos();
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createToDo = (todo) => async (dispatch) => {
  try {
    const { data } = await api.createToDo(todo);
    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteToDo = (id) => async (dispatch) => {
  try {
    await api.deleteToDo(id);
    dispatch({ type: "DELETE", payload: id });
  } catch (error) {
    console.log(error);
  }
};

export const updateToDo = (id, updatedToDO) => async (dispatch) => {
  try {
    const { data } = await api.updateToDo(id, updatedToDO);
    dispatch({ type: "UPDATE", payload: data });
  } catch (error) {
    console.log(error);
  }
};
