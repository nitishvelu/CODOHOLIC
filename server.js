const express = require('express');
const connectDB = require('./config/db');
const path=require('path');

const app = express();
connectDB(); //connecting to Database

//initializing middleware
app.use(express.json({extended: false}));

//define routes
app.use('/users',require('./routes/users'));
app.use('/profile',require('./routes/profile'));
app.use('/auth',require('./routes/auth'));

//serve static assets in production
if(process.env.NODE_ENV ==='production'){
    //set static folder
    app.use(express.static('client/build'));
    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'client','build','index.html'))
    });
}
const PORT = process.env.PORT || 5000;

app.listen(PORT,() => console.log(`server started on port ${PORT}`) );
