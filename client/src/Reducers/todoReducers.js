export const todoReducers = (todoList = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;

    case "CREATE":
      return [...todoList, action.payload];

    default:
      return todoList;
  }
};
