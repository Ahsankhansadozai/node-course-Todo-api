var mongoose = require("mongoose");

mongoose.promise = global.promise;

mongoose.connect("mongodb://localhost:27017/TodoApp", {
  useNewUrlParser: true
});

module.exports = { mongoose };
