const express = require('express')
const router = express.Router()

//needs to connect to database here
users = []
router.post('/register',(req,res) => {
    const {username, email, password} = req.body;

    const userAlreadyExists = users.find(user => user.username === username || user.email === email);

    if(userAlreadyExists){
        res.status(400).json({message:"User already exists"});
    }

    users.push({username,email,password});
    res.json({message:'successfully registered'})
})

router.get('/users',(req,res) => {
    res.json(users);
})
module.exports = router;