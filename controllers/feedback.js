var mongoose = require('mongoose');
var allFeedback = require('../models/allFeedback');

exports.feedbackPost = function(req, res, next) {
	var mongoose = require('mongoose');
	var allFeedback = require('../models/allFeedback');
	var userFeedback = {
		scenario: req.body.scenario,
		success: req.body.success,
		explain: req.body.explain,
		potential: req.body.potential,
		comments: req.body.comments
	};
	var feedback = new allFeedback(userFeedback);
	feedback.save( function(err, data){
		if(err){
			console.log('error save');
		}
		else{
			console.log('userFeedback');
			res.redirect('/data')
		}
	})
}
// var mongoose = require('mongoose');
// var allFeedback = require('../models/allFeedback');

// exports.feedbackPost = function(req, res, next) {
// 	var mongoose = require('mongoose');
// 	var allFeedback = require('../models/allFeedback');
// 	allFeedback.findById('allUsers', function(err, user){
// 		var feedback = {
// 			scenario: req.body.scenario,
// 			success: req.body.success,
// 			explain: req.body.explain,
// 			potential: req.body.potential,
// 			comments: req.body.comments
// 		};
// 		console.log(feedback),
// 		user.feedback.push(feedback, function(err) {
// 			if (err) {
// 				console.log('Error')
// 			} else {
// 				console.log('Feedback sent:', feedback);
// 				res.redirect('/data')
// 			}
// 		}),
// 		user.save(function(err) {
// 			if (err) {
// 				console.log('Error')
// 			} else {
// 				console.log('Feedback sent:', feedback);
// 				res.redirect('/data')
// 			}
// 		})
// 	})
// }