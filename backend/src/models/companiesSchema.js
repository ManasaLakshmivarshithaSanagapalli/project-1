//FILENAME : companies.js

const mongoose = require("mongoose");

const CompaniesSchema = mongoose.Schema({
  logoUrl: {
    type: String,
    required: true
  },
  companyName: {
    type: String,
    required: true
  },
  description: {
    type: Array,
    required: true
  },
  packageoffered: {
    type: Number,
    required: true
  },
  eligibility: {
    type: Array,
    required: true
  },
  role: {
    type: String,
    required: true
  },
  applied: {
    type: Number,
    required: true
  },
  // date:{
  // type:String,
  // required: true
  // }
}
)

// export model user with companiesSchema

module.exports = mongoose.model("companies", CompaniesSchema);