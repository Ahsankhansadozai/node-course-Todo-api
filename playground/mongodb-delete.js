const MongoClient = require("mongodb").MongoClient;

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
  if (err) {
    return console.log("We are unable to connect to Mongodb server");
  }
  console.log("Connect to Mongodb server ");
  db.collection("Users")
    .findOneAndDelete({ name: "Khan" })
    .then(result => {
      console.log(result);
    });
});
