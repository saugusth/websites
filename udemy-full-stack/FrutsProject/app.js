// jshint esversion:6

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/fruitsDB", {useNewUrlParser: true, useUnifiedTopology: true});


const fruitSchema = new mongoose.Schema ({
  name: {
    type:String,
    required: [true, "Please chack you data entry, no name given"]
  },
  rating: {
    type: Number,
    min:1,
    max:10
  },
  review: String
});

const personSchema = new mongoose.Schema ({
  name: String,
  age: Number,
  favoriteFruit: fruitSchema
});


const Fruit = mongoose.model("Fruit", fruitSchema);
const Person = mongoose.model("person",personSchema);

const fruit = new Fruit({
  //name: "Apple",
  rating : 10,
  review:"Preaty solid as a fruit"
});

// fruit.save().catch(function (err) {
//      console.log(err);
// });

const pineapple = new Fruit({
  name: "Pineapple",
  score: 9,
  review: "Great fruit"
});

pineapple.save();

const person = new Person({
  name: "Amy",
  age: "12",
  favoriteFruit: pineapple
});

person.save();

const kiwi = new Fruit({
  name:"kiwi",
  score: 10,
  review:"The best fruit!"
});

const orange = new Fruit({
  name:"Orange",
  score: 4,
  review:"Too sour for me"
});

const banana = new Fruit({
  name:"Banana",
  score: 3,
  review:"weird texture"
});

// Fruit.insertMany([kiwi, orange, banana], function(err){
//   if (err){
//     console.log(err);
//   }
//   else{
//     console.log("Succesfully saved all the fruits to fruitsDB");
//   }
// });

// Fruit.deleteOne({name: "Peach"}, function(err){
//     if (err){
//       console.log(err);
//     }
//     else{
//       console.log("Succesfully deleted the document");
//     }
// });

// Person.deleteMany({name: "John"}, function(err){
//   if (err){
//     console.log(err);
//   }
//   else{
//     console.log("Succesfully deleted many");
//   }
// });

Person.updateOne({_id:"600d250f1a467018101d985a"}, {favoriteFruit: banana},
function(err){
  if (err){
    console.log(err);
  }
  else{
    console.log("Succesfully updated the document");
  }
});

Fruit.find(function(err, fruits){
  if (err){
    console.log(err);
  }
  else{
    mongoose.connection.close();
    fruits.forEach(fruit => console.log(fruit.name));
  }
});


// const insertDocuments = function(db, callback) {
//   // Get the documents collection
//   const collection = db.collection('fruits');
//   // Insert some documents
//   collection.insertMany([
//     {name: "Apple",
//       score: 8,
//       review:"Great fruit"
//     },
//     {name: "Orange",
//       score: 6,
//       review:"Kinda sour"
//     },
//     {name: "Bannana",
//       score: 9,
//       review:"Great stuff!"
//     }
//   ], function(err, result) {
//     assert.equal(err, null);
//     assert.equal(3, result.result.n);
//     assert.equal(3, result.ops.length);
//     console.log("Inserted 3 documents into the collection");
//     callback(result);
//   });
// }
//
// const findDocuments = function(db, callback) {
//   // Get the documents collection
//   const collection = db.collection('fruits');
//   // Find some documents
//   collection.find({}).toArray(function(err, docs) {
//     assert.equal(err, null);
//     console.log("Found the following records");
//     console.log(docs)
//     callback(docs);
//   });
// }
