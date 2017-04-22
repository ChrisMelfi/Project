// var MongoClient = require('mongodb').MongoClient
//   , assert = require('assert');

// // Connection URL
// var url = 'mongodb://localhost/mainDB';
// // Use connect method to connect to the server
// MongoClient.connect(url, function(err, db) {
//   assert.equal(null, err);
//   console.log("Connected successfully to server");

//   updateDocument(db, function() {
//     db.close();
//   });
// });

// var updateDocument = function(db, callback) {
//   // Get the documents collection
//   var collection = db.collection('allFeedbacks');
//   // Update document where a is 2, set b equal to 1
//   collection.count({}, function(err, result) {
//     console.log(result);
//     callback(result);
//   });
// }



// var mongoose = require("mongoose");
// 	mongoose.connect("mongodb://localhost:27017/test");

// 	var db = mongoose.connection;

// 	db.on("error", console.error.bind(console, "connection error"));
// 	db.once("open", function(callback) {
// 		console.log("Connection succeeded.");
// });





// var mongoose = require("mongoose");
// mongoose.connect("mongodb://localhost:27017/mainDB");

// mongoose.connection.on("error", console.error.bind(console, "connection error"));
// mongoose.connection.once("open", function(callback) {
// 		console.log("Connection succeeded.");
// });

// var schemaOptions = {
// 	timestamp: true,
// 	toJSON: {
// 		virtuals: true
// 	}
// };

// var feedbackSchema = new mongoose.Schema({
// 	scenario: Number,
// 	success: String,
// 	explain: String,
// 	potential: String,
// 	comments: String
// }, schemaOptions);

// var userSchema = new mongoose.Schema({
// 	_id: String,
// 	feedback: [feedbackSchema]
// }, schemaOptions);

// var User = mongoose.model("User", userSchema);

// var Bee = new User({
// 	_id: "test1",
// 	feedback: [
// 		scenario: "2",
// 		success: "yeah",
// 		explain: String,
// 		potential: String,
// 		comments: String
// 		]
// });

// Bee.save(function(error) {
// 	console.log("Your bee has been saved!");
// if (error) {
// 	console.error(error);
//  }
// });