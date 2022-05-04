const mongoose=require("mongoose");

const adminSchema=mongoose.Schema({
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
    phoneNumber:{
        type:Number,
        required:true
    },
    userType:{
        type:String,
        enum:["ADMIN"],
        default:"ADMIN"
    }
},{
    timestamps:true,
})

const adminModel=mongoose.model("admin",adminSchema);

module.exports=adminModel;