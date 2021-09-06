import mongoose from "mongoose";
const todoSchema = mongoose.Schema({
  title: { type: String, required: true },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  status: { type: Boolean, default: false },
});

const ToDoModel = mongoose.model("ToDo", todoSchema);
export default ToDoModel;
