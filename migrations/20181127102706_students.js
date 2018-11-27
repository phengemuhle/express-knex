
exports.up = function(knex, Promise) {
  return knex.schema.createTable('students', (student) => {
      student.increments('id')
      student.string('name')
      student.string('fave_animal')
      student.string('previous_occupation')
      student.decimal('hometown_lat', [8], [8])
      student.decimal('hometown_long')
      student.string('useless_superpower')
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('students')
};
