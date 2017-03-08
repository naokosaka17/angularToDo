// Require mongoose
var mongoose = require("mongoose");
// Create Schema class
var Schema = mongoose.Schema;

// Create article schema
var ToDoSchema = new Schema({
  actualTodo: {
    type: String,
    required: true
  },
  completeBy: {
    type: Boolean,
    default:false
  },
  dueDate: {
  type: Date,
  default: new Date(+new Date() + 24*60*60*1000)
  }
});

// Create the Article model with the ToDoSchema
var Todo = mongoose.model("todos", ToDoSchema);

// Export the model
module.exports = Todo;
