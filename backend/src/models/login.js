//FILENAME : Login.js

const mongoose = require("mongoose");

const loginSchema = mongoose.Schema({
  Email: {
    type: String,
    required: true
  },
  Password: {
    type: String,
    required: true
  },
},
{
collection: 'Login'

});

// export model user with loginSchema
module.exports = mongoose.model("Login", loginSchema);