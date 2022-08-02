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
    time: {
        type: String
    }
})
const User = mongoose.model('schedule', Schedule);
module.exports = User;