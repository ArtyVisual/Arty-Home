const mongoose = require('mongoose')

const LandlordsSchema = new mongoose.Schema({
    name : String,
    email: {type: String, unique: true, required: true },
    password:String
})

const LandlordsModel = mongoose.model("Landlords",LandlordsSchema)
module.exports = LandlordsModel