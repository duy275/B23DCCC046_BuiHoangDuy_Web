const db = require('../config/database');

const Todo = {
    getAll: (callback) => {
        db.query('SELECT * FROM todo', callback);
    }
};

module.exports = Todo;
