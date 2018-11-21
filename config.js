const mongoUser = 'root';
const mongoPassword = 'sbroot123';

const port = process.env.DEV ? 5000 : 8080;
const morganMode = process.env.Dev ? 'dev' : 'tiny';
const mongoDB = `mongodb://${mongoUser}:${mongoPassword}@ds161487.mlab.com:61487/changing-life-quotes`;

module.exports = {
  port,
  morganMode,
  mongoDB
};