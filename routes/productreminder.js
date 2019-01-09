var reminder = require('../models/productreminder')
var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
reminder.getallbufferproduct(function (err, rows) {
    
        if (err) {
          res.json(err);
        }
        else {
          res.json(rows);
        }
    
    });
    
});

module.exports = router;