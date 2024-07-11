const path = require('path')

const db = require('knex')({
    client: 'sqlite3', // or 'better-sqlite3'
    connection: {
      filename: path.join(__dirname, '../../../crud_clientes_node/backend/database.sqlite'),
    },
    useNullAsDefault: true,
  });

  module.exports = db