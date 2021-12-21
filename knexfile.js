// Update with your config settings.
require("dotenv").config();
module.exports = {

  development: {
    client: 'pg',
    connection: {
      host: process.env.DB_HOST,
      database: process.env.DB_NAME,
      user:     process.env.DB_USER,
      password: process.env.DB_PASS
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      stub: __dirname + "/src/db/migrations/templates/defaultMigrationTemplate.js",
      directory: __dirname + '/src/db/migrations'
    }
  },

  staging: {
    client: 'pg',
    connection: {
      host: process.env.DB_HOST,
      database: process.env.DB_NAME,
      user:     process.env.DB_USER,
      password: process.env.DB_PASS
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      stub: __dirname + "/src/db/migrations/templates/defaultMigrationTemplate.js",
      directory: __dirname + '/src/db/migrations'
    }
  },

  production: {
    client: 'pg',
    connection: {
      host: process.env.DB_HOST,
      database: process.env.DB_NAME,
      user:     process.env.DB_USER,
      password: process.env.DB_PASS
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      stub: __dirname + "/src/db/migrations/templates/defaultMigrationTemplate.js",
      directory: __dirname + '/src/db/migrations'
    }
  }

};
