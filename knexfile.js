// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      stub: __dirname + "/src/db/migrations/templates/defaultMigrationTemplate.js",
      // directory: __dirname + '/src/db/migrations'
    }
  },

  staging: {
    client: 'pg',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      stub: __dirname + "/src/db/migrations/templates/defaultMigrationTemplate.js",
      // directory: __dirname + '/src/db/migrations'
    }
  },

  production: {
    client: 'pg',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      stub: __dirname + "/src/db/migrations/templates/defaultMigrationTemplate.js",
      // directory: __dirname + '/src/db/migrations'
    }
  }

};
