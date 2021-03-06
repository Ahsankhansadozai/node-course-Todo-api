const _ = require("lodash");
const express = require("express");
const bodyParser = require("body-parser");
const { ObjectID } = require("mongodb");

var { mongoose } = require("./db/mongoose");
var { User } = require("./models/User");
var { Todo } = require("./models/Todo");

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

app.delete("/todos/:id", (req, res) => {
  var id = req.params.id;

  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }
  Todo.findByIdAndRemove(id).then(todo => {
    if (!todo) {
      res.status(400).send();
    }
    res.send({ todo });
  }),
    err => {
      res.status(400).send();
    };
});

app.patch("/todos/:id", (req, res) => {
  var id = req.params.id;
  var body = _.pick(req.body, ["text", "completed"]);
  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  if (_.isBoolean(body.completed) && body.completed) {
    body.completedAt = new Date().getTime();
  } else {
    body.completed = false;
    body.completedAt = null;
  }
  Todo.findByIdAndUpdate(id, { $set: body }, { new: true })
    .then(todo => {
      if (!todo) {
        res.status(400).send();
      }
      res.send({ todo });
    })
    .catch(e => {
      res.status(400).send();
    });
});
app.listen(3000, () => {
  console.log("Server is up on port 3000");
});
