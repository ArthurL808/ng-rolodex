
exports.up = function(knex) {
  return knex.schema.createTable('contacts',(table)=>{
      table.increments('id')
      table.string('name').notNullable()
      table.string('address')
      table.string('mobile')
      table.string('work')
      table.string('home')
      table.string('email')
      table.string('github')
      table.timestamps(true,true)
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('contacts')
};
