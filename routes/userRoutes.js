const express = require('express');
const {messageController} = require('../controller/messageController')

const Router = express.Router();

Router.post('/message',messageController);

module.exports = Router;