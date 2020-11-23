const express = require('express');
const bcrypt= require('bcryptjs');
const router =express.Router();
const auth =require('../middleware/auth');
const User =require('../models/User');
const jwt =require('jsonwebtoken');
const config =require('config');
const { check, validationResult } =require('express-validator');

router.get('/',auth,async (req,res)=> {
    try{
        const user= await User.findById(req.user.id).select('-password');
        res.json(user);
    }catch(err){
        console.error(err.message);
        res.status(500).send('server error');
    }
});

router.post(
    '/',
    [
        
        check('email','please include a valid email')
        .isEmail(),
        check('password','password is required').exists()
    ],
    async (req,res)=> {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }
    const {email,password}=req.body;
    try{
        //check if user does not exist

        let user=await User.findOne({email });

        if(!user) {
            return res.status(400).json({errors :[{msg:'invalid credentials'}]});
        }
        
        
        //matching password
        const match= await bcrypt.compare(password,user.password);
        if(!match){
            return res.status(400).json({errors :[{msg:'invalid credentials'}]});

        }
 
        const payload={
            user:{
                id: user.id 
            }
        }
        jwt.sign(
            payload,                        //signing jwt
            config.get('jwtSecret'),
            {expiresIn:360000000},               //token expiration set high for testing
            (err,token) => {
                if(err) throw err;
                res.json({ token });

            }
            );
    }
    catch(err){
        console.error(err.message);
        res.status(500).send('server error');
    }


});

module.exports = router;