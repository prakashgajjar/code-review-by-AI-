const express = require('express');
const aiResponse = require('../controllers/AIServer.controller.js');
const infinityResponse = require('../controllers/DeepSeek.AIserver.Controller.js');
const routes = express.Router();

routes.post('/',aiResponse);
routes.post('/infinity',infinityResponse);

module.exports = routes;