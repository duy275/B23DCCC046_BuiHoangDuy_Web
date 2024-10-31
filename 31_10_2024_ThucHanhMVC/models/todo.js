const db = require('../config/database');

const Todo = {
    getAll: (callback) => {
        db.query('SELECT * FROM todo', callback);
    },

    getById: (id, callback) => {
        db.query('SELECT * FROM todo WHERE id =?', [id], callback);
    }
};
    

module.exports = Todo;
