const mongoose=require("mongoose");

const userSchema=mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:true
    },
    email:{
        type:String,
        trim:true,
        required:true
    },
    password:{
        type:String,
        trim:true,
        required:true
    },
    isadmin:{
        type:Boolean,
        default:false
    }
},{
    timestamps:true,
})

const userModel=mongoose.model("users",userSchema);

module.exports=userModel;