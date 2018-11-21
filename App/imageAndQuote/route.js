const Router = require('express').Router;

const {
    getQuote,
    createQuote,
    deleteQuote
} = require('./util');

let router = new Router();

router.route('/generate-changing-life-quote/:id')
    .get((...args) => {
        getQuote(...args);
    });

router.route('/generate-changing-life-quote')
    .post((...args) => {
        createQuote(...args);
    });

router.route('/generate-changing-life-quote/:id')
    .delete((...args) => {
        deleteQuote(...args);
    });

module.exports = router;