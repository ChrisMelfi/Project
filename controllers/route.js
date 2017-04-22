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

exports.data = function(req, res) {
  userCL.find({'scenario': '1'}, 'scenario', function(err, usersTestedTotal) {
    if (err) console.log('error')
    console.log(usersTestedTotal.length);
    res.render('data', {
      title: 'Data',
      usersTested: usersTestedTotal.length,
    });
  });

  // userCL.find({}, 'scenario', function(err, scenariosTestedTotal) {
  // scenariosTested: scenariosTestedTotal.length,
  // });
  // userCL.find({'scenario': '3'}, 'scenario', function(err, scenariosWellTotal) {
  // scenariosWell: scenariosWellTotal.length,
  // });
  // userCL.find({'scenario': '3'}, 'scenario', function(err, scenariosSomeTotal) {
  // scenariosSome: scenariosSomeTotal.length,
  // });
  // userCL.find({'scenario': '3'}, 'scenario', function(err, scenariosNoneTotal) {
  // scenariosNone: scenariosNoneTotal.length,
  // });
  // userCL.find({'scenario': '3'}, 'scenario', function(err, scenariosYesTotal) {
  // scenariosYes: scenariosYesTotal.length,
  // });
  // userCL.find({'scenario': '3'}, 'scenario', function(err, scenariosNoTotal) {
  // scenariosNo: scenariosNoTotal.length,
  // });

  // userCL.find({'scenario': '3'}, 'scenario', function(err, scenario1TestedTotal) {
  // scenario1Tested: scenario1TestedTotal.length,
  // });
  // userCL.find({'scenario': '3'}, 'scenario', function(err, scenario1WellTotal) {
  // scenario1Well: scenario1WellTotal.length,
  // });
  // userCL.find({'scenario': '3'}, 'scenario', function(err, scenario1SomeTotal) {
  // scenario1Some: scenario1SomeTotal.length,
  // });
  // userCL.find({'scenario': '3'}, 'scenario', function(err, scenario1NoneTotal) {
  // scenario1None: scenario1NoneTotal.length,
  // });
  // userCL.find({'scenario': '3'}, 'scenario', function(err, scenario1YesTotal) {
  // scenario1Yes: scenario1YesTotal.length,
  // });
  // userCL.find({'scenario': '3'}, 'scenario', function(err, scenario1NoTotal) {
  // scenario1No: scenario1NoTotal.length,
  // });

  // userCL.find({'scenario': '3'}, 'scenario', function(err, scenario2TestedTotal) {
  // scenario2Tested: scenario2TestedTotalTotal.length,
  // });
  // userCL.find({'scenario': '3'}, 'scenario', function(err, scenario2WellTotal) {
  // scenario2Well: scenario2WellTotal.length,
  // });
  // userCL.find({'scenario': '3'}, 'scenario', function(err, scenario2SomeTotal) {
  // scenario2Some: scenario2SomeTotal.length,
  // });
  // userCL.find({'scenario': '3'}, 'scenario', function(err, scenario2NoneTotal) {
  // scenario2None: scenario2NoneTotal.length,
  // });
  // userCL.find({'scenario': '3'}, 'scenario', function(err, scenario2YesTotal) {
  // scenario2Yes: scenario2YesTotal.length,
  // });
  // userCL.find({'scenario': '3'}, 'scenario', function(err, scenario2NoTotal) {
  // scenario2No: scenario2NoTotal.length,
  // });

  // userCL.find({'scenario': '3'}, 'scenario', function(err, scenario3TestedTotal) {
  // scenario3Tested: scenario3TestedTotal.length,
  // });
  // userCL.find({'scenario': '3'}, 'scenario', function(err, scenario3WellTotal) {
  // scenario3Well: scenario3WellTotal.length,
  // });
  // userCL.find({'scenario': '3'}, 'scenario', function(err, scenario3SomeTotal) {
  // scenario3Some: scenario3SomeTotal.length,
  // });
  // userCL.find({'scenario': '3'}, 'scenario', function(err, scenario3NoneTotal) {
  // scenario3None: scenario3NoneTotal.length,
  // });
  // userCL.find({'scenario': '3'}, 'scenario', function(err, scenario3YesTotal) {
  // scenario3Yes: scenario3YesTotal.length,
  // });
  // userCL.find({'scenario': '3'}, 'scenario', function(err, scenario3NoTotal) {
  // scenario3No: scenario3NoTotal.length,
  // });
};

  // userCL.find({'scenario': 1}, 'scenario', function(err, allFeedback) {
  //   if (err) console.log('error')
  //   console.log(allFeedback.length);
  //   res.render('data', {
  //     title: 'Data',
  //     scenariosTested: allFeedback.length,
  //   });
  // })


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
