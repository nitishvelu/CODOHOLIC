const express = require('express');
const router =express.Router();
const gravatar= require('gravatar');
const bcrypt= require('bcryptjs'); //for encrypting password on the database
const { check, validateResult, validationResult } =require('express-validator');
//user regestration
const User= require('../models/User')
router.post(
    '/',
    [
        check('name','Name is required')
        .not()
        .isEmpty(),
        check('email','please include a valid email')
        .isEmail(),
        check('password','please enter a password with 6 or more characters').isLength({min: 6})
    ],
    async (req,res)=> {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }
    const {name, email,password}=req.body;
    //encrypt password

    //return jsonwebtoken
    try{
        //check if user exists

        let user=await User.findOne({email });

        if(user) {
            return res.status(400).json({errors :[{msg:'User already exists'}]});
        }
        //get users gravatar
        const avatar = gravatar.url(email,{
            s: '200',
            r:'pg',
            d:'mm' //defaul image
        })

        user= new User({
            name,
            email,
            avatar,
            password
        });

        const salt=await bcrypt.genSalt(10);
        user.password= await bcrypt.hash(password,salt); //encrypting password
        await user.save(); //saving to database
        res.send('user registered');
    }
    catch(err){
        console.error(err.message);
        res.status(500).send('server error');
    }


});

module.exports = router;