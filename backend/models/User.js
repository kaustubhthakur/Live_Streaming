const mongoose = require('mongoose')
const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    streams: [{ type: mongoose.Schema.Types.ObjectId, ref: "Stream" }],
    profilepic:{
        type:String,
        default:"",
    },
    description:{
        type:String,
        default:"",
    },
    role: { type: String, enum: ["user", "broadcaster", "admin"], default: "user" },
},{
    timestamps:true,
})
module.exports = mongoose.model("User",UserSchema)