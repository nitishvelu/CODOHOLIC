const express = require('express');
const router =express.Router();
const auth = require('../middleware/auth');
const Profile =require('../models/Profile');
// eslint-disable-next-line no-unused-vars
const User =require('../models/User');

//private get users profile 
router.get('/me',auth,async (req,res)=> {
    try{
        const profile =await Profile.findOne({user:req.user.id}).populate('user',
        ['name','avatar']);

        if(!profile){
            return res.status(400).json({msg:'There is no profile for this user'});
        }
        res.json(profile);
    }catch(err){
        console.error(err.message);
        res.status(500).send('server error');
    }
});


//private create or update user profile

router.post('/',auth,async (req,res)=>{

    const {
        wpm,
        accuracy,
        noOfCharacters,
        preferredLanguages,
        snippetsCompleted
    } = req.body;

    // Build profile object
    const profileFields={};
    profileFields.user=req.user.id;
    if (wpm) profileFields.wpm =wpm;
    if (accuracy) profileFields.accuracy =accuracy;
    if (noOfCharacters) profileFields.noOfCharacters =noOfCharacters;
    if (snippetsCompleted) profileFields.snippetsCompleted =snippetsCompleted;
    if (preferredLanguages) {
        profileFields.preferredLanguages =preferredLanguages.split(',').map(preferredLanguages=> preferredLanguages.trim());
    }
    try{
        let profile =await Profile.findOne({user:req.user.id});
        if(profile){
            //update
            profile = await Profile.findOneAndUpdate(
                {user: req.user.id},
                {$set: profileFields},
                {new: true}
                );
            return res.json(profile);
        }
        // create
        profile= new Profile(profileFields);
        await profile.save();
        res.json(profile);

    }catch(err){
        console.error(err.message);
        res.status(500).send('server error');
    }
   
});

//public get all profiles @route /profile
router.get('/',async (req,res)=>{
    try {
        const profiles = await Profile.find().sort({'wpm':-1}).limit(10).populate('user',['name','avatar']); //top ten based on wpm
        res.json(profiles);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('server error');
    }
});

//public get single user profile
router.get('/user/:user_id',async (req,res)=>{
    try {
        const profile = await Profile.findOne({user: req.params.user_id}).populate('user',['name','avatar']);
        
        if(!profile) return res.status(400).json({msg:"profile not found"});
        
        res.json(profile);
    } catch (err) {
        console.error(err.message);
        if(err.kind =='ObjectId')return res.status(400).json({msg:"profile not found"});
        res.status(500).send('server error');
    }
});
module.exports = router;
