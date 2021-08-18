require("env2")("config.env");
const { Pool } = require('pg');

let DB_URL = process.env.DB_URL;
// switch (process.env.NODE_ENV) {
//   case 'test':
//     DB_URL = process.env.TEST_DB_URL;
//     break;
//   case 'production':
//     DB_URL = process.env.DB_URL;
//     break;
//   default: throw new Error('URL-Error !');
// }
module.exports = new Pool({
  connectionString: DB_URL,
  ssl: false
});