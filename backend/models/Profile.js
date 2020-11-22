const mongoose = require('mongoose');
const ProfileSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    wpm:{
        type: Number
    },
    accuracy:{
        type: Number
    },
    noOfCharacters:{
        type: Number
    },
    preferredLanguages:{
        type: [String]
    },
    snippetsCompleted:{
        type: Number
    }
});

// eslint-disable-next-line no-undef
module.exports = Profile = mongoose.model('profile',ProfileSchema);