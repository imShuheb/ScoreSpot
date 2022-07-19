const mongoose = require('mongoose')
const mongoURI = "mongodb://localhost:27017/Scorespot"
// const mongoURI = "mongodb+srv://shuheb:1234@cluster0.n7eikut.mongodb.net/?retryWrites=true&w=majority"


const connectToMongo = () => {
    mongoose.connect(mongoURI,() =>{
        console.log("connected to mongo")
    })
}

module.exports = connectToMongo;