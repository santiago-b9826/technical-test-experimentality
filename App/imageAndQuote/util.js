const { generateQuote } = require('../generateQuote/util');
const { generateImage } = require('../generateImage/util');
const { saveQuote } = require('../database/util');

const getQuote = (req, res) => {

}

const createQuote = async (req, res) => {
    try {
        let quote = await generateQuote();
        if (quote.message) {
            res.status(500).send(quote);
        }

        let image = await generateImage(quote);
        if (image.message) {
            res.status(500).send(image);
        }

        /*let save = await saveQuote(params);
        if(save.message){

        }*/
        let response = {
            id: '',
            quote: quote,
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
    getQuote,
    createQuote,
    deleteQuote
};