const express = require('express');
const connectDB = require('./config/db');
const path=require('path');

const app = express();
connectDB(); //connecting to Database

//initializing middleware
app.use(express.json({extended: false}));
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
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
