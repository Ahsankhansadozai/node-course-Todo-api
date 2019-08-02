var { mongoose } = require("./../server/db/mongoose");

var { Todo } = require("./../server/models/Todo");

Todo.findByIdAndRemove("5d407c6d54099223c85e737f").then(todo => {
  console.log(todo);
});
