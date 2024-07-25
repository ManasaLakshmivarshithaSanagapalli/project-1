// src/models/login.js
// const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs');

// const LoginSchema = new mongoose.Schema({
//   email: { type: String, required: true },
//   password: { type: String, required: true },
//   // You can add other fields as needed
// });

// LoginSchema.pre('save', async function (next) {
//   if (this.isModified('password') || this.isNew) {
//     const salt = await bcrypt.genSalt(10);
//     this.password = await bcrypt.hash(this.password, salt);
//   }
//   next();
// });

// module.exports = mongoose.model('Login', LoginSchema);
const mongoose = require('mongoose');

const LoginSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

module.exports = mongoose.model('Login', LoginSchema);
