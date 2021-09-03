import mongoose from "mongoose";
const todoSchema = mongoose.Schema({
  title: { type: String },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const ToDoModel = mongoose.model("ToDoModel", todoSchema);
export default ToDoModel;
