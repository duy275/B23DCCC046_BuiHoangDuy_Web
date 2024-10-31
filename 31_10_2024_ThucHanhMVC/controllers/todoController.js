const Todo = require('../models/todo');
const User = require('../models/user');

exports.getAllTodos = (req, res) => {
    Todo.getAll((err, results) => {
        if (err) return res.status(500).json({ error: err });
        res.status(200).json(results);
    });
}

exports.getTodoById = (req, res) => {
    const { id } = req.params;
    Todo.getById(id, (err, result) => {
        if (err) return res.status(500).json({ error: err });
        if (!result) return res.status(404).json({ message: 'Todo not found' });
        
        console.log(result);
        const user_id=result[0].userId;
        console.log(user_id)
       
        res.status(200).json({"message":"Success","data":result,"user_id":user_id});
    });
}