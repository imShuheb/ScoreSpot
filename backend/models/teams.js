const mongoose = require('mongoose')
const {Schema}  = mongoose;


const TeamSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    data :{
        type : Array
    }
})
const User = mongoose.model('Teams',TeamSchema);
module.exports = User;