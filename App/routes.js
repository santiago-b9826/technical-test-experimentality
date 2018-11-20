const Router = require('express').Router;

const quote= require('./imageAndQuote/route');
let router = new Router();

router.use('/api/v1',quote);

module.exports = router;