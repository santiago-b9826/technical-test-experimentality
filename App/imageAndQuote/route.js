const Router = require('express').Router;

const {
    obtainQuote,
    generateImageAndQuote,
    deleteQuote
} = require('./util');

let router = new Router();

router.route('/generate-changing-life-quote/:id')
    .get((...args) => {
        obtainQuote(...args);
    });

router.route('/generate-changing-life-quote')
    .post((...args) => {
        generateImageAndQuote(...args);
    });

router.route('/generate-changing-life-quote/:id')
    .delete((...args) => {
        deleteQuote(...args);
    });

module.exports = router;