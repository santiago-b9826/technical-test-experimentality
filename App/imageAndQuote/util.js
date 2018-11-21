const { generateQuote } = require('../generateQuote/util');
const { generateImage } = require('../generateImage/util');
const { saveImageAndQuote } = require('../database/util');

const obtainQuote = (req, res) => {

}

const generateImageAndQuote = async (req, res) => {
    try {
        let quote = await generateQuote();
        if (quote.message) {
            res.status(500).send(quote);
        }

        let image = await generateImage(quote.quote, quote.author);
        if (image.message) {
            res.status(500).send(image);
        }

        let params = {
            id: '',
            quote: quote,
            image: image
        }

        /*let save = await saveImageAndQuote(params);
        if(save.message){

        }*/
        let response = {
            quote: quote.quote,
            author: quote.author,
            category: quote.category,
            url: image
        }
        res.status(200).send(response);
    } catch (error) {
        res.status(500).send({ message: "Can not generate Image and Quote" });
    }
}

const deleteQuote = (req, res) => {

}

module.exports = {
    obtainQuote,
    generateImageAndQuote,
    deleteQuote
};