const { generateQuote } = require('../generateQuote/util');
const { generateImage } = require('../generateImage/util');
const { saveImageAndQuote } = require('../database/util');

const obtainQuote = (req, res) => {

}

const generateImageAndQuote = async (req, res) => {
    try {
        let quote;
        let image;
        let params;

        quote = await generateQuote();
        console.log(quote);        
        image = await generateImage(quote.quote,quote.author);
        /*
        image = await generateImage();
        params = {
            id: '',
            quote: quote,
            image: image
        }

        let imageAndQuote = await saveImageAndQuote(params);
        */
    } catch (error) {

    }
}

const deleteQuote = (req, res) => {

}

module.exports = {
    obtainQuote,
    generateImageAndQuote,
    deleteQuote
};