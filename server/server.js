var express = require("express");
var bodyParser = require("body-parser");

var { mongoose } = require("./db/mongoose");
var { User } = require("./models/User");
var { Todo } = require("./models/Todo");
var { ObjectID } = require("mongodb");
var app = express();

app.use(bodyParser.json());

app.post("/todos", (req, res) => {
  var todo = new Todo({
    text: req.body.text,
    completed: req.body.completed,
    completedAt: req.body.completedAt
  });

  todo.save().then(
    doc => {
      res.send(doc);
    },
    err => {
      res.status(400).send(err);
    }
  );
});

app.get("/todos", (req, res) => {
  Todo.find().then(
    doc => {
      res.send({ doc });
    },
    err => {
      res.status(400).send(err);
    }
  );
});

app.get("/todos/:id", (req, res) => {
  var id = req.params.id;
  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  Todo.findById(id).then(todo => {
    if (todo) {
      res.send({ todo });
    } else {
      res.status.send(404);
    }
  }),
    err => {
      res.status(400).send();
    };
});

app.listen(3000, () => {
  console.log("Server is up on port 3000");
});
