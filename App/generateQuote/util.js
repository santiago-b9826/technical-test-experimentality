const axios = require('axios');

const {
    protocol,
    host,
    path,
    headers
} = require('./config');

/**
 * Consume API generator of quotes with Axios.
 * 
 * @param {*} protocol 
 * @param {*} host 
 * @param {*} path 
 * @param {*} headers 
 */
const consumeAxios = async (protocol, host, path, headers) => {
    const quote = axios.create({
        baseURL: `${protocol}${host}`,
        headers: headers
    });
    try {
        let response = await quote.get(path);
        return response.data[0].quote;
    } catch (error) {
        return { message: "Can not get quote" };
    }
}

const generateQuote = async () => {
    let response = await consumeAxios(protocol, host, path, headers);
    return response;

}

module.exports = {
    generateQuote
}