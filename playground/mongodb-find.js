const MongoClient = require("mongodb").MongoClient;

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
  if (err) {
    return console.log("We are unable to connect to Mongodb server");
  }
  console.log("Connect to Mongodb server ");

  // db.collection("Todos")
  //   .find({ completed: false })
  //   .toArray()
  //   .then(
  //     docs => {
  //       console.log("Todos");
  //       console.log(JSON.stringify(docs, undefined, 2));
  //     },
  //     err => {
  //       console.log("unable to fetch Todos " + err);
  //     }
  //   );

  db.collection("Todos")
    .count()
    .then(
      count => {
        console.log(`count : ${count}`);
      },
      err => {
        console.log("unable to fetch Todos " + err);
      }
    );
});
