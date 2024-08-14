const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
    },
    rollnumber:{
        type:String,
        required:true,
        unique:true
    },
    department:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
        trim:true,
    },
    email:{
        type:String,
        required:true,
        trim:true,
    },
    batch:{
        type:String,
        trim:true,
        required:true,
    },
    picture:{
        type:String,
    },
    resume:{
        type:String,
    }
},{
    timestamps:true
});

const model = mongoose.model('user',userSchema);

module.exports = model;