const MongoClient = require("mongodb").MongoClient;
var ObjectID = require("mongodb").ObjectID;

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
  if (err) {
    return console.log("We are unable to connect to Mongodb server");
  }
  console.log("Connect to Mongodb server ");
  db.collection("Todos")
    .findOneAndUpdate(
      {
        _id: ObjectID("5d3cbc487a743f22fc305eff")
      },
      {
        $set: {
          completed: true
        }
      },
      {
        returnOrignaal: false
      }
    )
    .then(result => {
      console.log(result);
    });
});
