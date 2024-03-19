const express = require('express');
const Router = express.Router();

const UserController = require('../controllers/UserController')

//User Routes

Router.post('/api/add-user',UserController.addUser);
Router.post('/api/check-user',UserController.CheckUSer);

module.exports = Router;
