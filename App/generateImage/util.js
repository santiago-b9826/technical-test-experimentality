const { consumeAxios } = require('../utils');

const {
    protocol,
    host,
    path,
    headers
} = require('./config');

const generateImage = async (quote, author) => {
    console.log("asdf");

    const GoogleImages = require('google-images');

    const client = new GoogleImages('018086029937178784327:fijyfg8dmxe', 'AIzaSyA3HEHgMGK33b8neYFHkOMuUEjQoud7gNA');
    console.log("asdfa");

    let a = await client.search(`${quote},${author}`);
    console.log(a[0].url);
}

module.exports = {
    generateImage
}