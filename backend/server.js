const express = require('express');
const connectDB = require('./config/db');

const app = express();
connectDB(); //connecting to Database

//initializing middleware
app.use(express.json({extended: false}));
app.get('/',(req,res)=> res.send('API running'));
const PORT = process.env.PORT || 5000;

//define routes
app.use('/users',require('./routes/users'));
app.use('/profile',require('./routes/profile'));
app.use('/auth',require('./routes/auth'));


app.listen(PORT,() => console.log('server started on port ${PORT}') );
