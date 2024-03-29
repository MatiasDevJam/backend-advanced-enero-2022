const {mongoose} = require("../config/db")

const {Schema} = mongoose

const userSchema = new Schema({
    name:String,
    email:String,
    role:String
})

const UserModel = mongoose.model("users",userSchema)

module.exports = UserModel