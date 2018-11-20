const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const routes = require('./App/routes');

const {
    port,
    morganMode
} = require('./config');

const server = (app) => {
    app.set('port', port);
    app.use(cors());
    app.use(cors());
    app.options('*', cors());
    app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
        next();
    });

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: true
    }));

    app.use(morgan(morganMode));
    app.use('/', routes);
}

module.exports = {
    server
}