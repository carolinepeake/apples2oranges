const { Pool } = require('pg');
require("dotenv").config();

const pool = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  port: process.env.PGPORT,
  password: process.env.PGPASSWORD || '',
});

pool.connect(() => {
  console.log(`postgres server listening on port ${process.env.PGPORT}`);
});

module.exports = pool;