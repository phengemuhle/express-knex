const database = require('./database-connection')


module.exports = {
    listAll(){
        return database('students')
    },
    getById(id){
        return database('students').where({ id: id }).first()
    },
    createStudent(newKid){
        return database('students').insert( newKid ).returning('*')
    },
    deleteStudent(id) {
        return database('students').where('id', id).delete()
    }
  }