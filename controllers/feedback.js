var mongoose = require('mongoose');
var userCL = require('../models/userCL');

exports.feedbackPost = function(req, res, next) {
	var mongoose = require('mongoose');
	var userCL = require('../models/userCL');
	userCL.findById('allUsers', function(err, user){
		var feedback = {
			scenario: req.body.scenario,
			success: req.body.success,
			explain: req.body.explain,
			potential: req.body.potential,
			comments: req.body.comments
		};
		// user.feedback.push(feedback);
		// user.save(function(err) {
		// 	if (err) {
		// 		console.log('Error')
		// 	} else {
		// 		console.log('Feedback sent:', feedback);
		// 		res.redirect('/data')
		// 	}
		// })
	})
}