let mongoose = require('mongoose');

/**
 * Quote Structure 
 */
let quote = {
    id: String,
    quote: String,
    image: String
};

let schema = new mongoose.Schema(quote);

module.exports = {
    schema
}