const mongoose = require('mongoose')

const VPropertySchema = new mongoose.Schema({
    address :String,
    size :String,
    rent:String,
    image: String
})

const VPropertyModel = mongoose.model("VProperty",VPropertySchema)
module.exports = VPropertyModel