//FILENAME : db.js
// const mongoose = require("mongoose");

// mongoose.connect('mongodb+srv://sanagapallivarshitha:xhQuAUSVlBw0WnpU@cluster0.ygaipbz.mongodb.net/DriveReady?retryWrites=true&w=majority/', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   writeConcern: { w: 'majority' }
// }).then(() => {
//   console.log('Connected to DB !!');
// }).catch(err => {
//   console.error('Failed to connect to DB', err);
// });
// db.js
const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://sanagapallivarshitha:xhQuAUSVlBw0WnpU@cluster0.ygaipbz.mongodb.net/DriveReady?retryWrites=true&w=majority';

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  writeConcern: { w: 'majority' }
}).then(() => {
  console.log('Connected to DB !!');
}).catch(err => {
  console.error('Failed to connect to DB', err);
});

module.exports = mongoose;

// const mongoose = require('mongoose');

// const MONGOURI = "mongodb+srv://sanagapallivarshitha:xhQuAUSVlBw0WnpU@cluster0.ygaipbz.mongodb.net/DriveReady?retryWrites=true&w=majority/"; // Update with your actual MongoDB URI

// const InitiateMongoServer = async () => {
//     try {
//         await mongoose.connect(MONGOURI, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         });
//         console.log("Connected to DB !!");
//     } catch (e) {
//         console.log(e);
//         throw e;
//     }
// };

// module.exports = InitiateMongoServer;
