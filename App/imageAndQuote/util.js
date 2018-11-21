const { generateQuote } = require('../generateQuote/util');
const { generateImage } = require('../generateImage/util');

const {
    createQ,
    readQ,
    deleteQ
} = require('../database/util');

const formatQuote = (id, quote, image) => {
    return {
        id: id,
        quote: quote,
        image: image
    }
}

const getQuote = async (req, res) => {
    try {
        let read = await readQ(req.params.id);
        let response = await formatQuote(read.id, read.quote, read.image);
        res.status(200).send(response);
    } catch (error) {
        res.status(500).send({ message: `Can not get Quote with id: ${req.params.id}, maybe doesn't exist` });
    }
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

        let response = await formatQuote('', quote, image);
        let save = await createQ(response);
        if (save.message) {
            res.status(500).send(save);
        }

        response.id = save.id;
        res.status(200).send(response);
    } catch (error) {
        res.status(500).send({ message: 'Can not generate Image and Quote' });
    }
}

const deleteQuote = async (req, res) => {
    try {
        let response = await deleteQ(req.params.id);
        let message;
        if (response) {
            message = {
                message: `The Quote with id: ${req.params.id} was deleted correctly`
            }
        } else {
            message = {
                message: `The Quote with id: ${req.params.id} does not exist`
            }
        }
        res.status(200).send(message);
    } catch (error) {
        res.status(500).send({ message: `Can not delete Quote with id: ${req.params.id}, maybe doesn't exist` });
    }
}

module.exports = {
    getQuote,
    createQuote,
    deleteQuote
};