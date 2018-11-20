const { consumeAxios } = require('../utils');

const {
    protocol,
    host,
    path,
    headers
} = require('./config');

const generateImage = async () => {
    try {
        let response = await consumeAxios(protocol, host, path, headers);
        return response;
    } catch (error) {
        return { message: "Can not get image" };
        ;
    }
}

module.exports = {
    generateImage
}