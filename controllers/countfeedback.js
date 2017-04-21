var mongoose = require('mongoose');
var userCL = require('../models/userCL');

// userCL.findById('allUsers', function(err, user){
// 	user.feedback.count(
// 		);
	
// })


// userCL.findById('allUsers', function(err, res) {
//     if (err) { throw err; }
//     if (!res) { console.log('model not found'); }
//     console.log(res.feedback.length);
// });


// userCL.feedback.aggregate(
//   {$group: {_id: null, count: {$sum: {$size: '$feedback'}}}},
//   console.log()
// );

userCL.count({_id:'allUsers'}, function( err, res){
    console.log("Number of users:", res);
})