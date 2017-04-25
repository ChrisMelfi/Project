var mongoose = require('mongoose');
mongoose.set('debug', true);

var feedbackSchema = new mongoose.Schema({
	scenario: Number,
	success: String,
	explain: String,
	potential: String,
	comments: String,
	date: { type: Date, default: Date.now }
});

var allFeedback = mongoose.model('allFeedback', feedbackSchema, 'allFeedback');

module.exports = allFeedback;

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
// 	comments: String,
// 	date: { type: Date, default: Date.now }
// },schemaOptions);

// var userSchema = new mongoose.Schema({
// 	_id: String,
// 	feedback: [feedbackSchema]
// },schemaOptions);

// var allFeedback = mongoose.model('allFeedback', userSchema, 'allFeedback');