//FILENAME : User.js

const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true
  },
  Email: {
    type: String,
    required: true
  },
  Roll_number: {
    type: String,
    required: true
  },
  College: {
    type: String,
    required: true
  },
  branch: {
    type: String,
    required: true, 
  },
  passout_year: {
    type: String,
    required: true
  },
  Department: {
    type: String,
    required: true
  },
  course: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
 Companies:{
  type: Array,
  required:true
 }
});

// export model user with UserSchema
module.exports = mongoose.model("user", UserSchema);