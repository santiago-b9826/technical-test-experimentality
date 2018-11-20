const axios = require('axios');

const consumeAxios = async(protocol, host, path, headers) => {
    const quote = axios.create({
        baseURL: `${protocol}${host}`,
        headers: headers
    });
    let response = await quote.get(path);
    return response.data[0];
}

module.exports = {
    consumeAxios
}