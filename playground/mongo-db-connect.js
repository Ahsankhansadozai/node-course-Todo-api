const MongoClient = require("mongodb").MongoClient;

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
  if (err) {
    return console.log("We are unable to connect to Mongodb server");
  }
  console.log("Connect to Mongodb server ");

  // db.collection("Todos").insertOne(
  //   {
  //     text: "Some text",
  //     completed: false
  //   },
  //   (err, result) => {
  //     if (err) {
  //       return console.log("Unable to insert todos" + err);
  //     }
  //     console.log(JSON.stringify(result.ops, undefined, 2));
  //   }
  // );

  // db.collection("Users").insertOne(
  //   {
  //     name: "Ahsan",
  //     age: 22,
  //     location: "H10 islamabad"
  //   },
  //   (err, result) => {
  //     if (err) {
  //       return console.log("Unable to insert todos" + err);
  //     }
  //     console.log(JSON.stringify(result.ops));
  //   }
  // );
  // db.close();

  db.collection("Users")
    .count({ name: "Khan" })
    .then(
      docs => {
        console.log(docs);
      },
      err => {
        console.log(`unable to fetch data ${err}`);
      }
    );
});
