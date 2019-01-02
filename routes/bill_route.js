var bill = require('../models/bill_model')
var express = require('express');
var router = express.Router();
router.post('/', function (req, res, next) {
    bill.addbill(req.body, function (err, rows) {
  
      if (err) {
        res.json(err);
      }
      else {
        res.json(rows);
      }
    });
   });
   router.get('/', function (req, res, next) {
    bill.getallbill(function (err, rows) {
                 if (err) {
                     res.json(err);
             }
             else {
              console.log(rows.insertid)
                            res.json(rows);
             }
        
            });
        
     });
  module.exports = router;