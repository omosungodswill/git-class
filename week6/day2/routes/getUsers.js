const express = require('express');
const router = express.Router();

const users = [ {id: 1, name: "Charles", age: 20},
                {id: 2, name: "John", age: 30},
                {id: 3, name: "George", age: 61}
            ]
router.get('/users', (req, res) => {
    res.json(users);
})

router.post('/users', (req, res) => {
    const {id, name, age} = req.body;
    const newUser = {id, name, age}
    res.status(201).json({message: 'user created', user: newUser})
});

router.get('/users/:id', (req, res) => {
    const userId = req.params.id;
    res.json((users[userId-1]));
});

router.put('/users/:id', (req,res) => {
    const userId = req.params.id;
    const {name, age} = req.body;
    res.json({message: `User ${userId} updated`, udatedUser: { id: userId, name, age }});
});

router.delete('/users/:id', (req, res) => {
    const userId = req.params.id;
    res.json({ message: `User ${userId} deleted` });
})


module.exports = router;