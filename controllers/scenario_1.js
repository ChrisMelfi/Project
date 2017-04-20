var User = require('../models/User')

exports.feedbackPost = function(req, res, next) {
	User.findById('testuser1', function(err, user){
		console.log(user)
		if (err) return res.render('error')
		var feedback = {
			scenario: req.body.scenario,
			success: req.body.success,
			explain: req.body.explain,
			potential: req.body.potential,
			comments: req.body.comments,
		}
		user.feedback.push(feedback)
		user.save(function(err){
			if (err) return res.render('error')
		})
	})
}