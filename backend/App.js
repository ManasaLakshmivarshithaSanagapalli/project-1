const express = require("express");
const bodyParser = require("body-parser");
const InitiateMongoServer = require("./src/config/db");
const cors = require("cors");
// const nodemailer = require("nodemailer")
const multer = require("multer");
const UserRouter = require('./src/routes/userRoutes');
// const mongoose = require("mongoose");
const CompaniesSchema = require("./src/models/companiesSchema");
const Login = require("./src/models/login");
const path = require('path');
// const companiesSchema = require("./src/models/companiesSchema");
// Initiate Mongo Server
InitiateMongoServer();
const app = express();
// cors
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));

// Middleware
app.use(bodyParser.json());


//app.use('/', UserRouter);


app.put('/users/:id',(req, res) => {
  const userId =parseInt(req,params.id);
  const updateUser = req.body;
  users = users.map(user => {
    if (user.id === userId) {
      return { ...user, ...updateUser };
    }
    return user;
  });
  res.json(users.find(user => user.id === userId));
})
// app.delete('/users/:id',(req, res) =>)
app.post('/api/postData',(req,res)=>{
  //retrieve data from request body
  // const postData = req.body.inputfileds;
  //Do something with the received data 
  console.log('Received data:',req.body);

  // res.status(200).json({message:'Data received successfully'})

});
//start the server
const PORT = process.env.PORT ||4000;
app.listen(PORT,() => {
  console.log(`Server is running on port ${PORT}`);
});
// app.get("/", (req, res) => {
//   res.json({ message: "API Working" });
// });
