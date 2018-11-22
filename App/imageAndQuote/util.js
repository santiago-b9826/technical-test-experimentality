const { generateQuote } = require('../generateQuote/util');
const { generateImage } = require('../generateImage/util');

const {
    createQ,
    readQ,
    deleteQ
} = require('../database/util');

/**
 * Recieve id, quote and image url return a JSON with the quote structure.
 * 
 * @param {*} id 
 * @param {*} quote 
 * @param {*} image 
 */
const formatQuote = (id, quote, image) => {
    return {
        id: id,
        quote: quote,
        image: image
    }
}

/**
 * Get quote from database with the id sent.
 * 
 * Method: Get
 * EndPoint: /api/v1/generate-changing-life-quote/:id
 * 
 * Response(OK): JSON
 *      id: String => Unique identificator in database.
 *      quote: String => Random famous quote.
 *      image: String => Image URL.
 * 
 * Fail Request: JSON
 *      message: String => Message describing the error.
 * 
 * @param {*} 
 * @param {*} 
 */
const getQuote = async (req, res) => {
    try {
        let read = await readQ(req.params.id);
        let response = await formatQuote(read.id, read.quote, read.image);
        res.status(200).send(response);
    } catch (error) {
        res.send({ message: `Can not get Quote with id: ${req.params.id}, maybe doesn't exist` });
    }
}

/**
 * Get a random quote, search a image related with this quote and save in a database.
 * 
 * Method: Post 
 * EndPoint: /api/v1/generate-changing-life-quote
 *
 * Response(OK): JSON
 *      id: String => Unique identificator in database.
 *      quote: String => Random famous quote.
 *      image: String => Image URL.
 * 
 * Fail Request: JSON
 *      message: String => Message describing the error.
 * 
 * @param {*} req
 * @param {*} res
 */
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
        res.send({ message: 'Can not generate Image and Quote' });
    }
}

/**
 * Remove quote from database with the id sent.
 * 
 * Method: Delete 
 * EndPoint: /api/v1/generate-changing-life-quote/:id
 * 
 * Response(OK): JSON
 *      message: String => Message describing if the quote was delete or if doesn't exist in database.
 * 
 * Fail Request: JSON
 *      message: String => Message describing the error.
 *
 * @param {*} req 
 * @param {*} res 
 */
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
        res.send({ message: `Can not delete Quote with id: ${req.params.id}, maybe doesn't exist` });
    }
}

module.exports = {
    getQuote,
    createQuote,
    deleteQuote
};