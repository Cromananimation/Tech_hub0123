const router = require('express').Router();
const userRoutes = require('../home_routes.js');
const postRoutes = require('../post-route.js'); 
const commentRoutes = require('./comment-routes');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);

module.exports = router;
