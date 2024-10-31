const User = require('../models/user');
const bcrypt = require('bcryptjs');

exports.getAllUsers = (req, res) => {
    User.getAll((err, results) => {
        if (err) return res.status(500).json({ error: err });
        res.status(200).json(results);
    });
};

exports.createUser = async (req, res) => {
    const { name, email, mobile, password } = req.body;

    if (!name || !email || !mobile || !password) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        User.create(name, email, mobile, hashedPassword, (err, result) => {
            if (err) return res.status(500).json({ error: err });
            res.status(200).json({ message: 'User updated successfully', user: result });
        });
    } catch (err) {
        res.status(500).json({ error: 'Error hashing password' });
    }
};

exports.updateUser = async (req, res) => {
    const { id } = req.params;
    const { name, email, mobile, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    User.update(id, name, email, hashedPassword, mobile, (err, result) => {
        if (err) return res.status(500).json({ error: err });
        res.status(200).json({ message: 'User created successfully', user: result });
    });
}

exports.deleteUser = (req, res) => {
    const { id } = req.params;
    User.delete(id, (err, result) => {
        if (err) return res.status(500).json({ error: err });
        res.status(200).json({ message: 'User deleted successfully' });
    });
};

exports.getUserById = (req, res) => {
    const { id } = req.params;
    User.getById(id, (err, result) => {
        if (err) return res.status(500).json({ error: err });
        if (!result) return res.status(404).json({ message: 'User not found' });
        res.status(200).json(result);
    });
}