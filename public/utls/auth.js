const passport = require('passport');
const bcrypt = require('bcrypt');
const { User } = require('../../models');
const LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(
  async(username, password, done) => {
    const userData = await User.findOne({ where: { username: username } });
    if (!userData) {
      return done(null, false);
    }
    const validPassword = await bcrypt.compare(password, userData.password);
    if (validPassword) {
      return done(null, userData);
    } else {
      return done(null, false);
    }
  }
))


passport.serializeUser((user, done) => {
  done(null, user.id);
})

passport.deserializeUser((id, done) => {
  User.findByPk(id).then(user => {
    done(null, user);
  })
})
const withAuth = (req, res, next) => {
  // middleware to redirect the user to the login page if they are not logged in.
  if (!req.session.logged_in) {
    res.redirect('/login');
  } else {
    next();
  }
};

module.exports = { passport, withAuth}
