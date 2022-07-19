const mongoose = require('mongoose')
const { Schema } = mongoose;


const ProfileSchem = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    fname: {
        type: String
    },
    lname: {
        type: String
    },
    dob: {
        type: String
    },
    phone: {
        type: Number
    },
    address: {
        type: String
    },
    fname: {
        type: String
    },
    batsman: {
        type: String
    },
    bowller: {
        type: String
    },
    wicketKeeper: {
        type: String
    },
    allRounder: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
})
const Profile = mongoose.model('profile', ProfileSchem);
module.exports = Profile;