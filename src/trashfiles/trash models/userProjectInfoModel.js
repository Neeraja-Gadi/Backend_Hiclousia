const mongoose = require("mongoose");

const userProjectSchema = new mongoose.Schema(
  {
    userDetailsID: {
      type: ObjectId,
      ref: "userPersonal"
    },
    fname: {
      type: String,
      required: true,
    },
    lname: {
      type: String,
      required: true,
    },
    projectTitle: {
      type: String,
      required: true,
      
    },
    email: {
        type: String,
        required: true,
        unique: true,
      },
    timeDuration: {
        type: Number,
        required: true,
    },
    authority: {
        type: String,
        required: true,
        enum: []
    },
    scope: {
        type: String,
        required: true, 
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("userProject", userProjectSchema);