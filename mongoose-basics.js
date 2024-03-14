import mongoose from 'mongoose';


// connection string
await mongoose.connect('mongodb://127.0.0.1:27017/<PUT DB NAME HERE>', { useNewUrlParser: true, useUnifiedTopology: true });

// // Subject model
// const Student = mongoose.model('Student', {
//   stdnum: String,
//   fname: String,
//   lname: String,
//   age: Number
// })

// Subject model with forced collection name (e.g. topics)
const Student = mongoose.model('Subject', {
  stdnum: String,
  fname: String,
  lname: String,
  age: Number
}, 'studentData')

// the result parameter will contain a single object (the first matching document found
// if no matching document was found, result will be null
let data = await Student.findOne({ fname: "Peter", lname: "Parker" });
console.log(data);

// results here will always be an array, regardless of how many matching documents were found
// let data = await Student.find({ age: 17 });
// console.log(data);

