const mongoose=require("mongoose");

const compliantSchema=mongoose.Schema({
    roomNumber:{
        type:Number,
        trim:true
    },
    name:{
        type:String,
        trim:true,
        required:true
    },
    complaintDescription:{
        type:String,
        trim:true,
        required:true
    },
    status:{
        type:String,
        trim:true,
        enum:["open","in-progress","close"],
        required:true
    },
    remarks:{
        type:String,
        trim:true,
    },
    type:{
        type:String,
        trim:true,
        enum:["electric","plumbing","cleaning","miscellaneous"],
        required:true
    },

});

const complaintModel=mongoose.model("complaint",compliantSchema);

module.exports=complaintModel;