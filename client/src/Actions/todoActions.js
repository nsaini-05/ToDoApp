import * as api from "../api/apiCall";
export const getToDos = () => async (dispatch) => {
  try {
    const { data } = await api.fetchToDos();
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error);
  }
};
