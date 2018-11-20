const { consumeAxios } = require('../utils');

const {
    protocol,
    host,
    path,
    headers
} = require('./config');

const generateQuote = async () => {
    try {
        let response = await consumeAxios(protocol, host, path, headers);
        return response;
    } catch (error) {
        return { message: "Can not get quote" };
        ;
    }
}

module.exports = {
    generateQuote
}