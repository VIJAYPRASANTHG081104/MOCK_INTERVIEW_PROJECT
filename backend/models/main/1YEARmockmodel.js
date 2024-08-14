const mongoose = require("mongoose");
const {ObjectId} = mongoose.Schema;
const mockModel = new mongoose.Schema({
  event: {
    group_discussion: {
        faculties: {
          type: [{
            faculty: {
              type: mongoose.Schema.Types.ObjectId,
              ref: "Admin",
            },
            venue: {
              type: String,
            },
            fromTime:{
              type: String
            },
            toTime:{
              type: String
            },
            fromDate:{
              type:String
            },
            toDate:{
              type:String
            },
            students_reg: {
              type:[{
                student: {
                  type: mongoose.Schema.Types.ObjectId,
                  ref: "user",
                },
                attended: {
                  type: String,
                  enum: ["present", "absent", null]
                }
              }]
          }
          }]
        },
        isActive:{
            type:Boolean,
            default:false
        }
      },
    mock_interview: {
      isActive:{
        type:Boolean,
        default:false
    }
    },
    self_introduction: {
      isActive:{
        type:Boolean,
        default:false
    }
    },
    resume_evaluation: {
      isActive:{
        type:Boolean,
        default:false
    }
    },
  },
  year:{
    type:String,
    default:"I_year"
  }
});

const model = mongoose.model("mockfirstyear", mockModel);

module.exports = model;
