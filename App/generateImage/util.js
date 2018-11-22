const googleImages = require('google-images');

const {
    cseId,
    apiKey
} = require('./config');

/**
 * Consume API generator of Images with Google Images.
 * @param {*} quote 
 */
const generateImage = async (quote) => {
    try {
        const client = new googleImages(cseId, apiKey);
        let a = await client.search(quote);
        return a[0].url;
    } catch (error) {
        return { message: "Can not get image" };
    }
}

module.exports = {
    generateImage
}