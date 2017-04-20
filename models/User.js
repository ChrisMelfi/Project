var mongoose = require('mongoose')

var schemaOptions = {
	timestamp: true,
	toJSON: {
		virtuals: true
	}
}

var feedbackSchema = new mongoose.Schema({
	scenario: Number,
	success: String,
	explain: String,
	potential: String,
	comments: String,
}, schemaOptions)

var userSchema = new mongoose.Schema({
	_id: String,
	feedback: [feedbackSchema]
}, schemaOptions)

var User = mongoose.model('User', userSchema)

module.exports = User