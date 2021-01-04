const mongoose = require('mongoose');
const ProfileSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    wpm:{
        type: Number,
        default: 0
    },
    accuracy:{
        type: [Number],
        default : []
    },
    java:{
        type: [Number],
        default : []
    },
    C:{
        type: [Number],
        default : []
    },
    CPP :{
        type: [Number],
        default : []
    },
    python: {
        type: [Number],
        default : []
    },
    english: {
        type: [Number],
        default : []
    },
    noOfCharacters:{
        type: Number,
        default : 0
    },
    preferredLanguages:{
        type: [String]
    },
    snippetsCompleted:{
        type: Number,
        default : 0
    }
});

// eslint-disable-next-line no-undef
module.exports = Profile = mongoose.model('profile',ProfileSchema);
