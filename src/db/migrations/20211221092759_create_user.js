exports.up = async (knex, Promise) => {
    return await knex.schema.createTable('users', (table) => {
        table.increments('id').primary()
        table.string('name').nullable()
        table.string('username').nullable()
        table.string('password').nullable()
        table.string('email')
        table.timestamp('created_at')
    })
};

exports.down = async (knex, Promise) => {
    return await knex.schema.dropTable("users")
};
