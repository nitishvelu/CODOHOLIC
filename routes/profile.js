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

    try
    {
        let langCode = req.body.lang;
    
        //adding to lang array based on lang and add accuracy to acc array
        console.log(req.body.accuracy);
        switch (langCode)
        {
            case "java" :
            await Profile.findOneAndUpdate({user:req.user.id},{
                $push : {
                    java : req.body.wpm,
                    accuracy : req.body.accuracy
                }
            });
            // to be filled after data is put 
            break;

        }

        //getting snippets and wpm for calculation
        var data = {
            snippets: 0,
            wpm: 0
        };
        await Profile.findOne({user:req.user.id}, (err,res) => {
            if(err) throw err;
            if(res!=null)
            {
                data.snippets = res.snippetsCompleted;
                data.wpm = res.wpm;
            }

        });
        //calculating wpm 
        var new_wpm = data.snippets == 0 ? Math.round(((data.wpm*data.snippets + req.body.wpm)/(data.snippets + 1))* 10)/10 : req.body.wpm;
        //writing wpm to db
        Profile.findOneAndUpdate({user:req.user.id},{
            wpm: new_wpm
        },(err) => {
            if (err) throw err;
        });
        
        //incrementing characters and snippets
        let incVal = req.body.characters;
        await Profile.updateOne({user:req.user.id},{
            $inc : {
                noOfCharacters : incVal,
                snippetsCompleted : 1
            }
        });

        await Profile.findOne({user:req.user.id}),(err , res) => {
            console.log(res);
        }

    }
    catch(err)
    {
        console.log(err);
        throw err;
    }

    
    
    

    
    
    
    
    
    
    const {
        //wpm,
        // accuracy,
        //noOfCharacters,
        preferredLanguages,
        //snippetsCompleted
    } = req.body;

    // Build profile object
    const profileFields={};
    profileFields.user=req.user.id;
    //if (new_wpm) profileFields.wpm = new_wpm;
    //if (accuracy) profileFields.accuracy =accuracy;
    //if (noOfCharacters) profileFields.noOfCharacters =noOfCharacters;
    //if (snippetsCompleted) profileFields.snippetsCompleted =snippetsCompleted;
    if (preferredLanguages) {
        profileFields.preferredLanguages =preferredLanguages;
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
