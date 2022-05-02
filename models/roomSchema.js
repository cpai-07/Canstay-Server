const mongoose=require("mongoose");

const roomSchema = mongoose.Schema({
    roomNo:{
        type:Number,
        required:[true, "Room number is req"]
    },
    floor:{
        type:Number,
        enum: [1,2,3,4]
    },
    maxCount:{
        type:Number,
        default: 2,
        enum: [1,2]
    },
    isAlloted:{
        type:Boolean,
        default:false
    },
    allottedTo:[{
        type: mongoose.Schema.ObjectId,
        ref: "Student",
    }],
    isSingle:{
        type:Boolean,
        default: false,
    },
    isFull:{
        type:Boolean,
        default: false,
    },
    
},{
    timestamps:true
});

const room = mongoose.model("rooms", roomSchema);
module.exports = room;