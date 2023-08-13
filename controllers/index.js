const router = require('express').Router();
const apiRoutes = require('../config/api');
const axios = require('axios')
const rendRouter = require('./rendered');

router.use('/api', apiRoutes)

router.use('/', rendRouter)

module.exports = router;