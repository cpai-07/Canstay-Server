const mongoose=require("mongoose");

const studentSchema=mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:true
    },
    usn:{
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
    },
    roomNumber:{
        type:Number,
        required:true
    },
    roomAllotted:{
        type:Boolean,
        default:false,
    },
    semester:{
        type:Number,
        required:true,
        enum:[1,2,3,4,5,6,7,8]
    },
    branch:{
        type:String,
        trim:true,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    gender: {
        type: String,
        enum: ['MALE', 'FEMALE'],
        required: true,
      },
      userType:{
          type:String,
          enum:["STUD"],
          default:"STUD"
      }
},{
    timestamps:true,
});

const studentModel=mongoose.model("student",studentSchema);

module.exports=studentModel;