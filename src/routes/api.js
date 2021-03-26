var express = require("express");
var router = express.Router();
const NotifyController = require('../controllers/NotifyController');

router.post("/", NotifyController.sendData);


module.exports = router;