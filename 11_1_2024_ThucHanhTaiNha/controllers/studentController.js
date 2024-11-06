const Student = require('../models/student');

exports.getAllStudents = (req, res) => {
Student.getAll((err, results) => {
    if(err) return res.status(500).json({ error: err });
    res.status(200).json(results);
})
}

exports.getStudentById = (req, res) => {
const {id} = req.params;
Student.getById(id, (err, results) => {
    if(err) return res.status(500).json({error: err});
    res.status(200).json(results);
});
}

exports.addStudent = (req, res) => {
const {name, age, gmail, phonenumber, address} =req.body;

Student.create(name, age, gmail, phonenumber, address, (err, results) => {
    if(err) return res.status(500).json({error: err});
    res.status(200).json({message: "Student created succesfully", Student: results});
})
}

exports.updateStudent = (req, res) => {
const {id} = req.params;
const {name, age, gmail, phonenumber, address} = req.body;

Student.update(id, name, age, gmail, phonenumber, address, (err, results) => {
    if(err) return res.status(500).json({error: err});
    res.status(200).json({message: "Student updated successfully", Student: results});
})
}

exports.deleteStudent = (req, res) => {
const {id} = req.params;
Student.delete(id, (err, results)=> {
    if(err) return res.status(500).json({error: err});
    res.status(200).json({message: "Student deleted successfully"});
});
}