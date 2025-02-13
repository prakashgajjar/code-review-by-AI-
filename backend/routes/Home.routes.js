const express = require('express');
const aiResponse = require('../controllers/AIServer.controller.js');
const infinityResponse = require('../controllers/DeepSeek.AIserver.Controller.js');
const router = express.Router();

router.post('/',aiResponse);
router.post('/infinity',infinityResponse);

module.exports = router;