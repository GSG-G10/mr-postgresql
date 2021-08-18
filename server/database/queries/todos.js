const connection = require('../config/connection');

const getTodo = () => connection.query('select * from todos');

module.exports = getTodo;
