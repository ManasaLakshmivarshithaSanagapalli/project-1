const mongoose = require('mongoose');

const CompaniesSchema = new mongoose.Schema({
  CompanyName: { type: String, required: true },
  description: { type: String, required: true },
  eligibility: { type: String, required: true },
  packageoffered: { type: String, required: true },
  applied: { type: String, required: true },
  role: { type: String, required: true },
  // logoUrl: { type: String, required: true },
  // date: { type: Date, required: false }
});

module.exports = mongoose.model('Company', CompaniesSchema);
