const db = require('../config/database');

const Student = {
    getAll: (callBack) => {
        db.query('SELECT * FROM students', callBack);
    },

    getById: (id, callBack) => {
        db.query('SELECT * FROM students WHERE id = ?', [id], callBack);
    },

    create: (name, age, gmail, phonenumber, address, callBack) => {
        db.query('INSERT INTO students (name, age, gmail, phonenumber, address) VALUES (?, ?, ?, ?, ?)', [name, age, gmail, phonenumber, address], callBack);
    },

    update: (id, name, age, gmail, phonenumber, address, callBack) => {
        db.query('UPDATE students SET name =?, age =?, gmail =?, phonenumber =?, address =? WHERE id =?', [name, age, gmail, phonenumber, address, id], callBack);
    },

    delete: (id, callBack) => {
        db.query('DELETE FROM students WHERE id = ?', [id], callBack);
    }
}

module.exports = Student;