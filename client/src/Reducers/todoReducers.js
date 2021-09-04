export const todoReducers = (todoList = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;

    case "CREATE":

    default:
      return todoList;
  }
};
