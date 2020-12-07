const express = require('express');
const connectDB = require('./config/db');
const path=require('path');

const app = express();
connectDB(); //connecting to Database

//initializing middleware
app.use(express.json({extended: false}));
app.use(function (req, res, next) {

    // to make it work
    res.setHeader('Access-Control-Allow-Origin', '*');



    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');


    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

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
