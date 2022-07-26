const mongoose = require('mongoose')
const {Schema}  = mongoose;


const TeamSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    data :{
        type : Array
    },
    name :{
        type : String,
        unique : true
    }
})
const User = mongoose.model('Teams',TeamSchema);
module.exports = User;