const mongoose = require('mongoose');

const adminModel = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    staffnumber:{
        type:String,
        required:true,
        unique:true
    },
    picture:{
        type:String,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    department:{
        type:String,
        required:true,
    },
    currentMeetings:{
        type:[{
            MeetingName:{
                type:String,
                enum:['Group Discussion','Self Introduction', 'Resume Evaluation','Mock Interview',null]
            },
            venue:{
                type:String
            },
            from_date:{
                type:String
            },
            to_date:{
                type:String
            },
            timeInterval:{
                type:Number
            }
        }]
    }
},{
    timestamps:true
})

const model = mongoose.model("admin",adminModel);

module.exports = model;