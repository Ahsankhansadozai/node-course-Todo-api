var { mongoose } = require("./../server/db/mongoose");

var { Todo } = require("./../server/models/Todo");

var id = "5d3f4a1d97fe63310027337e";
Todo.findOne({
  _id: id
}).then(todo => {
  console.log("Todo :", JSON.stringify(todo, undefined, 2));
});

Todo.findById(id).then(todo => {
  console.log(JSON.stringify(todo));
});
