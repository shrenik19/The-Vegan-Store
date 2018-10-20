var deleteallcat = require('../models/cat_model')
var express = require('express');
var router = express.Router();

router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

router.post('/', function (req, res, next) {
    deleteallcat.deleteAllcat(req.body, function (err, rows) { 
        if (err) {
          res.json(err);
        }
        else {
          res.json(rows);
        }
    });
});


module.exports = router;