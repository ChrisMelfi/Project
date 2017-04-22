var mongoose = require('mongoose');
var userCL = require('../models/userCL');
var async = require('async');

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
//   userCL.find(function(err, scenariosTestedTotal) {
//     if (err) console.log('error')
//     console.log(scenariosTestedTotal.length);
//     res.render('data', {
//       title: 'Data',
//       scenariosTested: scenariosTestedTotal.length,
//     });
//   });
// };

// exports.data = function(req, res) {
//   async.series([function(callback){
//     userCL.find(function(err, scenariosTestedTotal) {
//       if (err) console.log('callback error');
//       callback(null, scenariosTestedTotal);
//     })
//   },
//   function(callback){
//     userCL.find({'success': 'It all worked well'}, function(err, scenariosWellTotal) {
//       if (err) console.log('callback error');
//       callback(null, scenariosWellTotal);
//     })
//   },
//   function(callback){
//     userCL.find({'success': 'Some of it worked'}, function(err, scenariosSomeTotal) {
//       if (err) console.log('callback error');
//       callback(null, scenariosSomeTotal);
//     })
//   },
//   function(callback){
//     userCL.find({'success': 'None of it worked'}, function(err, scenariosNoneTotal) {
//       if (err) console.log('callback error');
//       callback(null, scenariosNoneTotal);
//     })
//   }],
//   function(err, res){
//     res.render('data', {
//       title: 'Data',
//       scenariosTested: scenariosTestedTotal.length,
//       scenariosWell: scenariosWellTotal.length,
//       scenariosSome: scenariosSomeTotal.length,
//       scenariosNone: scenariosNoneTotal.length,
//     });
//   });
// };


exports.data = function(req, res) {
  userCL.find(function(err, scenariosTestedTotal) {
    if (err) {console.log('error')}

    userCL.find({'success': 'It all worked well'}, function(err, scenariosWellTotal) {
    if (err) {console.log('error')}
      userCL.find({'success': 'Some of it worked'}, function(err, scenariosSomeTotal) {
      if (err) {console.log('error')}
        userCL.find({'success': 'None of it worked'}, function(err, scenariosNoneTotal) {
        if (err) {console.log('error')}
          userCL.find({'potential': 'Yes, I can see the potential'}, function(err, scenariosYesTotal) {
          if (err) {console.log('error')}
            userCL.find({'potential': 'No, I cannot see the potential'}, function(err, scenariosNoTotal) {
            if (err) {console.log('error')}

              userCL.find({'scenario': '1'}, function(err, scenario1TestedTotal) {
              if (err) {console.log('error')}
                userCL.find({'scenario': '1', 'success': 'It all worked well'}, function(err, scenario1WellTotal) {
                if (err) {console.log('error')}
                  userCL.find({'scenario': '1', 'success': 'Some of it worked'}, function(err, scenario1SomeTotal) {
                  if (err) {console.log('error')}
                    userCL.find({'scenario': '1', 'success': 'None of it worked'}, function(err, scenario1NoneTotal) {
                    if (err) {console.log('error')}
                      userCL.find({'scenario': '1', 'potential': 'Yes, I can see the potential'}, function(err, scenario1YesTotal) {
                      if (err) {console.log('error')}
                        userCL.find({'scenario': '1', 'potential': 'No, I cannot see the potential'}, function(err, scenario1NoTotal) {
                        if (err) {console.log('error')}

                          userCL.find({'scenario': '2'}, function(err, scenario2TestedTotal) {
                          if (err) {console.log('error')}
                            userCL.find({'scenario': '2', 'success': 'It all worked well'}, function(err, scenario2WellTotal) {
                            if (err) {console.log('error')}
                              userCL.find({'scenario': '2', 'success': 'Some of it worked'}, function(err, scenario2SomeTotal) {
                              if (err) {console.log('error')}
                                userCL.find({'scenario': '2', 'success': 'None of it worked'}, function(err, scenario2NoneTotal) {
                                if (err) {console.log('error')}
                                  userCL.find({'scenario': '2', 'potential': 'Yes, I can see the potential'}, function(err, scenario2YesTotal) {
                                  if (err) {console.log('error')}
                                    userCL.find({'scenario': '2', 'potential': 'No, I cannot see the potential'}, function(err, scenario2NoTotal) {
                                    if (err) {console.log('error')}

                                      userCL.find({'scenario': '3'}, function(err, scenario3TestedTotal) {
                                      if (err) {console.log('error')}
                                        userCL.find({'scenario': '3', 'success': 'It all worked well'}, function(err, scenario3WellTotal) {
                                        if (err) {console.log('error')}
                                          userCL.find({'scenario': '3', 'success': 'Some of it worked'}, function(err, scenario3SomeTotal) {
                                          if (err) {console.log('error')}
                                            userCL.find({'scenario': '3', 'success': 'None of it worked'}, function(err, scenario3NoneTotal) {
                                            if (err) {console.log('error')}
                                              userCL.find({'scenario': '3', 'potential': 'Yes, I can see the potential'}, function(err, scenario3YesTotal) {
                                              if (err) {console.log('error')}
                                                userCL.find({'scenario': '3', 'potential': 'No, I cannot see the potential'}, function(err, scenario3NoTotal) {
                                                if (err) console.log('error');
                                                res.render('data', {
                                                  title: 'Data',
                                                  scenariosTested: scenariosTestedTotal.length,
                                                  scenariosWell: scenariosWellTotal.length,
                                                  scenariosSome: scenariosSomeTotal.length,
                                                  scenariosNone: scenariosNoneTotal.length,
                                                  scenariosYes: scenariosYesTotal.length,
                                                  scenariosYes: scenariosYesTotal.length,
                                                  scenariosNo: scenariosNoTotal.length,

                                                  scenario1Tested: scenario1TestedTotal.length,
                                                  scenario1Well: scenario1WellTotal.length,
                                                  scenario1Some: scenario1SomeTotal.length,
                                                  scenario1None: scenario1NoneTotal.length,
                                                  scenario1Yes: scenario1YesTotal.length,
                                                  scenario1Yes: scenario1YesTotal.length,
                                                  scenario1No: scenario1NoTotal.length,

                                                  scenario2Tested: scenario2TestedTotal.length,
                                                  scenario2Well: scenario2WellTotal.length,
                                                  scenario2Some: scenario2SomeTotal.length,
                                                  scenario2None: scenario2NoneTotal.length,
                                                  scenario2Yes: scenario2YesTotal.length,
                                                  scenario2Yes: scenario2YesTotal.length,
                                                  scenario2No: scenario2NoTotal.length,

                                                  scenario3Tested: scenario3TestedTotal.length,
                                                  scenario3Well: scenario3WellTotal.length,
                                                  scenario3Some: scenario3SomeTotal.length,
                                                  scenario3None: scenario3NoneTotal.length,
                                                  scenario3Yes: scenario3YesTotal.length,
                                                  scenario3Yes: scenario3YesTotal.length,
                                                  scenario3No: scenario3NoTotal.length,
                                                }); 
                                                });
                                              });
                                            });
                                          });
                                        });
                                      });

                                    });
                                  });
                                });
                              });
                            });
                          });

                        });
                      });
                    });
                  });
                });
              });

            });
          });
        });
      });
    });
  });
};

// res.render('data', {
//   title: 'Data',
//   scenariosTested: scenariosTestedTotal.length,
//   scenariosWell: scenariosWellTotal.length,
//   scenariosSome: scenariosSomeTotal.length,
// }); 

//   userCL.find(function(err, scenariosTestedTotal) {
//   scenariosTested: scenariosTestedTotal.length,
//   });
//   userCL.find({'success': 'It all worked well'}, function(err, scenariosWellTotal) {
//   scenariosWell: scenariosWellTotal.length,
//   });
//   userCL.find({'success': 'Some of it worked'}, function(err, scenariosSomeTotal) {
//   scenariosSome: scenariosSomeTotal.length,
//   });
//   userCL.find({'success': 'None of it worked'}, function(err, scenariosNoneTotal) {
//   scenariosNone: scenariosNoneTotal.length,
//   });
//   userCL.find({'potential': 'Yes, I can see the potential'}, function(err, scenariosYesTotal) {
//   scenariosYes: scenariosYesTotal.length,
//   });
//   userCL.find({'potential': 'No, I cannot see the potential'}, function(err, scenariosNoTotal) {
//   scenariosNo: scenariosNoTotal.length,
//   });

//   userCL.find({'scenario': '1'}, function(err, scenario1TestedTotal) {
//   scenario1Tested: scenario1TestedTotal.length,
//   });
//   userCL.find({'scenario': '1', 'success': 'It all worked well'}, function(err, scenario1WellTotal) {
//   scenario1Well: scenario1WellTotal.length,
//   });
//   userCL.find({'scenario': '1', 'success': 'Some of it worked'}, function(err, scenario1SomeTotal) {
//   scenario1Some: scenario1SomeTotal.length,
//   });
//   userCL.find({'scenario': '1', 'success': 'None of it worked'}, function(err, scenario1NoneTotal) {
//   scenario1None: scenario1NoneTotal.length,
//   });
//   userCL.find({'scenario': '1', 'potential': 'Yes, I can see the potential'}, function(err, scenario1YesTotal) {
//   scenario1Yes: scenario1YesTotal.length,
//   });
//   userCL.find({'scenario': '1', 'potential': 'No, I cannot see the potential'}, function(err, scenario1NoTotal) {
//   scenario1No: scenario1NoTotal.length,
//   });

//   userCL.find({'scenario': '2'}, function(err, scenario2TestedTotal) {
//   scenario2Tested: scenario2TestedTotalTotal.length,
//   });
//   userCL.find({'scenario': '2', 'success': 'It all worked well'}, function(err, scenario2WellTotal) {
//   scenario2Well: scenario2WellTotal.length,
//   });
//   userCL.find({'scenario': '2', 'success': 'Some of it worked'}, function(err, scenario2SomeTotal) {
//   scenario2Some: scenario2SomeTotal.length,
//   });
//   userCL.find({'scenario': '2', 'success': 'None of it worked'}, function(err, scenario2NoneTotal) {
//   scenario2None: scenario2NoneTotal.length,
//   });
//   userCL.find({'scenario': '2', 'potential': 'Yes, I can see the potential'}, function(err, scenario2YesTotal) {
//   scenario2Yes: scenario2YesTotal.length,
//   });
//   userCL.find({'scenario': '2', 'potential': 'No, I cannot see the potential'}, function(err, scenario2NoTotal) {
//   scenario2No: scenario2NoTotal.length,
//   });

//   userCL.find({'scenario': '3'}, function(err, scenario3TestedTotal) {
//   scenario3Tested: scenario3TestedTotal.length,
//   });
//   userCL.find({'scenario': '3', 'success': 'It all worked well'}, function(err, scenario3WellTotal) {
//   scenario3Well: scenario3WellTotal.length,
//   });
//   userCL.find({'scenario': '3', 'success': 'Some of it worked'}, function(err, scenario3SomeTotal) {
//   scenario3Some: scenario3SomeTotal.length,
//   });
//   userCL.find({'scenario': '3', 'success': 'None of it worked'}, function(err, scenario3NoneTotal) {
//   scenario3None: scenario3NoneTotal.length,
//   });
//   userCL.find({'scenario': '3', 'potential': 'Yes, I can see the potential'}, function(err, scenario3YesTotal) {
//   scenario3Yes: scenario3YesTotal.length,
//   });
//   userCL.find({'scenario': '3', 'potential': 'No, I cannot see the potential'}, function(err, scenario3NoTotal) {
//   scenario3No: scenario3NoTotal.length,
//   });
// };


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
