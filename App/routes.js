const Router = require('express').Router;

const database = require('./database/route')
let router = new Router();

router.use('/api/v1/data',database);

module.exports = router;