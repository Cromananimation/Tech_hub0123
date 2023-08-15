const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('../public/utls/home_routes.js');
const consouleRoutes = require('./consoule_routes.js');
const rendRouter = require('./rendered');

router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/consoule', consouleRoutes);
router.use((req, res) => {
    res.status(404).end();
});
module.exports = router;
