const { model } = require('./model');

const createQ = async (quote) => {
    try {
        let response = await new model(quote).save();
        return response;
    } catch (error) {
        return { message: 'Can not to save the amazing quote' };
    }
}

const readQ = async (id) => {
    let response = await model.find({ id: id });
    return response[0];
}

const deleteQ = async (id) => {
    let response = await model.findOneAndRemove({ id: id });
    console.log("db", response);
    return response;
}

module.exports = {
    createQ,
    readQ,
    deleteQ
}