const mongoose = require('mongoose');
const autoincrement = require('mongoose-auto-increment');
const { schema } = require('./schema');

autoincrement.initialize(mongoose);
schema.plugin(autoincrement.plugin, { model: 'Quote', field: 'id' });

let model = mongoose.model('Quote', schema);

module.exports = {
    model
}