const express = require('express');
const cors = require('cors');
const app = express();

app.get('/',(req,res) => {
    res.send('This is a GET request');
    console.log('Hello World')
})

app.use(cors({
    origin: 'http://localhost:5173', // Allow only React frontend
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed methods
    credentials: true // Allow cookies if needed
})); //allows all origin

app.use(express.json()); //include require('body-parser') or just app.use(express.json())
const productRoutes = require('./routes/products.js');
app.use('/products',productRoutes)

const authRoutes = require('./routes/auth.js');
app.use('/auth',authRoutes);

app.listen(3000,() => {
    console.log('My First Api')
})