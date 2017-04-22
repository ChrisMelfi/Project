var mongoose = require('mongoose');
mongoose.set('debug', true);

var schemaOptions = {
	timestamp: true,
	toJSON: {
		virtuals: true
	}
};

// var feedbackSchema = new mongoose.Schema({
// 	scenario: Number,
// 	success: String,
// 	explain: String,
// 	potential: String,
// 	comments: String,
// 	date: { type: Date, default: Date.now }
// },schemaOptions);

// var userSchema = new mongoose.Schema({
// 	_id: String,
// 	feedback: [feedbackSchema]
// },schemaOptions);

// var userCL = mongoose.model('userCL', userSchema, 'userCL');

var feedbackSchema = new mongoose.Schema({
	scenario: Number,
	success: String,
	explain: String,
	potential: String,
	comments: String,
	date: { type: Date, default: Date.now }
},schemaOptions);

var userCL = mongoose.model('userCL', feedbackSchema, 'userCL');

module.exports = userCL;