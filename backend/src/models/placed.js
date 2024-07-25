const mongoose = require('mongoose');

const placedDataSchema = new mongoose.Schema({
    // id: String,
    roll_number: String,
    name:String,
    college:String,
    branch:String,
    year_of_placed:String,

    
  // Add other fields 
}, { collection: 'Placed Student data' });

module.exports = mongoose.model('placedData', placedDataSchema);
