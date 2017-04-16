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
  res.render('data', {
    title: 'Data'
  });
};

/**
 * GET /about
 */
exports.feedback_form = function(req, res) {
  res.render('feedback_form', {
    title: 'Feedback Form',
    project:true
  });
};

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
