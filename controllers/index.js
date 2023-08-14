const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./utls/home_routes');
const dashboardRoutes = require('./utls/consoule');
const rendRouter = require('./rendered');
router.use('/', rendRouter);
router.use('/api', apiRoutes);
router.use('/home', homeRoutes);
router.use('/dashboard', dashboardRoutes);
router.use((req, res) => {
    res.status(404).end();
});
module.exports = router;
