const db = require('../config/database');

const User = {
    getAll: (callback) => {
        db.query('SELECT * FROM users', callback);
    },

    // models/user.js
    create: (name, email, mobile, hashedPassword, callback) => {
        db.query('INSERT INTO users (name, email, mobile, password) VALUES (?, ?, ?, ?)', [name, email, mobile, hashedPassword], callback);
    },


    update: (id, name, email, password, mobile, callback) => {
        db.query('UPDATE users SET name =?, email =?, mobile =?, password =? WHERE id =?', [name, email, mobile, password, id], callback);
    },

    delete: (id, callback) => {
        db.query('DELETE FROM users WHERE id =?', [id], callback);
    },

    getById: (id, callback) => {
        db.query('SELECT * FROM users WHERE id =?', [id], callback);
    }
};

module.exports = User;