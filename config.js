const path = require('path');

const rootPath = path.resolve(__dirname, '.');
const port = process.env.DEV ? 5000 : 8080;
const morganMode = process.env.Dev ? 'dev' : 'tiny';
const urlMongo = '';

module.exports = {
  rootPath,
  port,
  morganMode,
  urlMongo
};