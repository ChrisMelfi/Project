var mongoose = require('mongoose');
var userCL = require('../models/userCL');

/**
 * GET /
 */
exports.home = function(req, res) {
  res.render('home', {
    title: 'Home',
    project:true
  });
};

/**
 * GET /about
 */
exports.about = function(req, res) {
  res.render('about', {
    title: 'About'
  });
};

/**
 * GET /about
 */
// exports.data = function(req, res) {
//   userCL.findOne({}, function(err, allFeedback) {
//     if (err) console.log('error'),
//     console.log(allFeedback)

//     // userCL.findOne({'feedback.scenario': '2'}, function(err, feedbackSuccess) {
//     // userCL.findOne({'feedback.scenario':1}, 'feedback.scenario', function(err, feedbackSuccess) {
//     //   console.log(feedbackSuccess)
//     //   if (err) console.log('error')
//     //   res.render('data', {
//     //     title: 'Data',
//     //     // scenariosTested: allFeedback.length,
//     //     // feedback: feedbackSuccess.length
//     //   });
//     // })
//   })
// };

exports.data = function(req, res) {
  userCL.find({'scenario': '1'}, 'scenario', function(err, scenario1Total) {
    if (err) console.log('error')
    console.log(scenario1Total.length);
    res.render('data', {
      title: 'Data',
      scenariosTested: scenario1Total.length,
    });
  })
  // userCL.find({'scenario': 1}, 'scenario', function(err, allFeedback) {
  //   if (err) console.log('error')
  //   console.log(allFeedback.length);
  //   res.render('data', {
  //     title: 'Data',
  //     scenariosTested: allFeedback.length,
  //   });
  // })
};

    // userCL.findOne({'feedback.scenario': '2'}, function(err, feedbackSuccess) {
    // userCL.findOne({'feedback.scenario':1}, 'feedback.scenario', function(err, feedbackSuccess) {
    // userCL.findOne({'feedback.scenario':'2'}, {'feedback':{"$all":[{"$elemMatch":{'scenario':'2'}}]}}, function(err, feedbackSuccess) {
    // userCL.find({}).populate({path:'feedback',match:{scenario:2}}).exec(function(err, feedbackSuccess) {  
    // userCL.findOne({"feedback":{"$elemMatch":{'scenario':{'$all':[2]}}}}, function(err, feedbackSuccess) {
      // console.log(feedbackSuccess)
      // if (err) console.log('error')
      // res.render('data', {
      //   title: 'Data',
      //   // scenariosTested: allFeedback.length,
      //   // feedback: feedbackSuccess.length
      // });
    // })

/**
 * GET /about
 */
exports.new_user = function(req, res) {
  res.render('new_user', {
    title: 'New User',
    project:true
  });
};

/**
 * GET /about
 */
exports.scenario_1 = function(req, res) {
  res.render('scenario_1', {
    title: 'Scenario 1',
    project:true
  });
};

/**
 * GET /about
 */
exports.scenario_1_active = function(req, res) {
  res.render('scenario_1_active', {
    title: 'Scenario 1',
    project:true
  });
};

/**
 * GET /about
 */
exports.scenario_1_feedback = function(req, res) {
  res.render('scenario_1_feedback', {
    title: 'Scenario 1',
    project:true
  });
};

/**
 * GET /about
 */
exports.scenario_2 = function(req, res) {
  res.render('scenario_2', {
    title: 'Scenario 2',
    project:true
  });
};

/**
 * GET /about
 */
exports.scenario_2_active = function(req, res) {
  res.render('scenario_2_active', {
    title: 'Scenario 2',
    project:true
  });
};

/**
 * GET /about
 */
exports.scenario_2_feedback = function(req, res) {
  res.render('scenario_2_feedback', {
    title: 'Scenario 2',
    project:true
  });
};

/**
 * GET /about
 */
exports.scenario_3 = function(req, res) {
  res.render('scenario_3', {
    title: 'Scenario 3',
    project:true
  });
};

/**
 * GET /about
 */
exports.scenario_3_active = function(req, res) {
  res.render('scenario_3_active', {
    title: 'Scenario 3',
    project:true
  });
};

/**
 * GET /about
 */
exports.scenario_3_feedback = function(req, res) {
  res.render('scenario_3_feedback', {
    title: 'Scenario 3',
    project:true
  });
};

/**
 * GET /about
 */
exports.splash = function(req, res) {
  res.render('splash', {
    title: 'Welcome',
    project:true
  });
};

/**
 * GET /about
 */
exports.terms = function(req, res) {
  res.render('terms', {
    title: 'Terms & Conditions'
  });
};
