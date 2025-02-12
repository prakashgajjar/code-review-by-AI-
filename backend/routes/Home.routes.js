const express = require('express');
const aiResponse = require('../controllers/AIServer.controller.js');
const routes = express.Router();

routes.get('/',aiResponse);

module.exports = routes;