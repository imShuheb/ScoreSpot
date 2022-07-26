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
    tname :{
        type : String,
        required : true,
        unique : true
    }
})
const User = mongoose.model('Teams',TeamSchema);
module.exports = User;