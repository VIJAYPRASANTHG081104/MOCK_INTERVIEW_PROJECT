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
              venue: {
                type: String,
                required: true
              },
              students_reg: [
                {
                  student: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "user"
                  },
                  attended: {
                    type: String,
                    enum: ["present", "absent", null]
                  }
                }
              ]
            }
          }]
        },
        isActive:{
            type:Boolean,
        }
      },
    mock_interview: {},
    self_introduction: {},
    resume_evaluation: {},
  },
  year:{
    type:String,
    default:"II_year"
  }
});

const model = mongoose.model("mocksecondyear", mockModel);

module.exports = model;
