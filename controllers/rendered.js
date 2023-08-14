const router = require('express').Router();
const { passport } = require('./utls/auth');
const { Post, Comment, User } = require('../models');
const  { withAuth }  = require('./utls/auth');
const bcrypt = require('bcrypt');

router.get('/', withAuth, async (req, res) => {
  console.log(req.user)
    try {
      // if (req.query.sortBy === 'likes') {
      //   postData = await Post.findAll({
      //     include: Comment,
      //     order: [['likes', 'DESC']],
      //   });
      // } else {
      const postData = await Post.findAll({
          include: Comment,
      });
      let posts = postData.map((post) => post.get({ plain: true }));
      res.render('home', {posts: posts, withAuth: req.withAuth});  
        return res.redirect('/')
      } 
    catch (error) {
        console.log(error)
      res.status(500).json(error);
    }
  });
  router.get('/login', (req, res) => {
    if (req.session.logged_in) {
      res.redirect('/');
      return;
    }
    res.render('login');
  })

  router.post('/login', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
  }))

  router.get('/signup', (req, res) => {
    if (req.session.logged_in) {
      res.redirect('/');
      return;
    }
    res.render('register');
  })
  module.exports = router;