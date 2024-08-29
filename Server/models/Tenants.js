const mongoose = require('mongoose')

const TenantsSchema = new mongoose.Schema({
    name : String,
    email:{ type: String, unique: true, required: true },
    password:String
})

const TenantsModel = mongoose.model("Tenants",TenantsSchema)
module.exports = TenantsModel