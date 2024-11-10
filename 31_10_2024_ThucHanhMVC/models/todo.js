const db = require('../config/database');

const Todo = {
    getAll: (callback) => {
        db.query('SELECT * FROM todos', callback);
    },

    getById: (id, callback) => {
        db.query('SELECT * FROM todos WHERE id =?', [id], callback);
    },

    delete: (id, callback) => {
        db.query('DELETE FROM todos WHERE id =?', [id], callback);
    },

    create: (title, duedate, callback) => {
        db.query('INSERT INTO todos (title, duedate) VALUES (?,?)', [title, duedate], callback);
    },

    update: (id, title, duedate, completed, callback) => {
        db.query('UPDATE todos SET title =?, duedate =?, completed =? WHERE id =?', [title, duedate, completed, id], callback);
    },
};
    

module.exports = Todo;
