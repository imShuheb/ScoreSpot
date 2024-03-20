const mongoose = require('mongoose')
const { Schema } = mongoose;


const Schedule = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    team1: {
        type: Array
    },
    team2: {
        type: Array
    },
    date: {
        type: String
    },
    ground: {
        type: String
    },
    status: {
        type: String,
        default: 'Upcoming'
    },
    time: {
        type: String
    },
    toss: {
        type: String,
        default: 'null'
    },
    select_b: {
        type: String,
        default: 'null'
    },
    overs: {
        type: String
    },
    perovers: {
        type: String
    },
    balltype: {
        type: String
    }
})
const User = mongoose.model('schedule', Schedule);
module.exports = User;