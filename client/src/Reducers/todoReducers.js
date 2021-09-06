export const todoReducers = (todoList = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;

    case "CREATE":
      return [...todoList, action.payload];

    case "DELETE":
      return todoList.filter((todo) => todo._id !== action.payload);

    case "UPDATE":
      return todoList.map((todo) =>
        todo._id === action.payload._id ? action.payload : todo
      );

    default:
      return todoList;
  }
};
