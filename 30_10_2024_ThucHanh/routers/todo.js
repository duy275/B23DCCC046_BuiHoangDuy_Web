const express = require('express');
const router = express.Router();
const db = require('../config/database');


router.get('/', (req, res) => {
    db.query('SELECT * FROM todo', (err, results) => {
        if (err) return res.status(500).send(err);
        res.json(results);
    });
});

router.post('/add',(req,res)=>{
    db.query('INSERT INTO todo SET ?',req.body,(err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send('Todo added to database');
        }
    })
})
router.get('/:id'   , (req, res) => {
    const { id } = req.params;
    db.query('SELECT * FROM todo WHERE id = ?', [id], (err, result) => {
        if (err) return res.status(500).send(err);
        if (result.length === 0) return res.status(404).send('Todo not found');
        res.json(result[0]);
    });
});

router.put('/:id', (req, res) => {
    const { title, description, due_date, completed } = req.body;
    const { id } = req.params;
    db.query('UPDATE todo SET title = ?, description = ?, due_date = ?, completed = ? WHERE id = ?', 
    [title, description, due_date, completed, id], (err, result) => {
        if (err) return res.status(500).send(err);
        res.json({ message: 'Todo updated successfully' });
    });
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM todo WHERE id = ?', [id], (err, result) => {
        if (err) return res.status(500).send(err);
        res.json({ message: 'Todo deleted successfully' });
    });
});

module.exports = router;


