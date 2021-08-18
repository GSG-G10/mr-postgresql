
const { readFileSync } = require('fs');
const { join } = require('path');
const connection = require('./connection');

const buildDb = () => {
  const sql = readFileSync(join(__dirname, 'data.sql')).toString();
  return connection.query(sql);
};

buildDb()

module.exports = { buildDb };