const connection = require('../config/connection');

const addTodo = (description) => connection.query('insert into todos(description, done) values($1,$2)',
  [description, false]);

module.exports = addTodo;
