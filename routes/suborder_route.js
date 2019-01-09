var suborder= require('../models/subOrder_model')
var express = require('express');
var router = express.Router();
router.post('/', function (req, res, next) {
    suborder.addordersum(req.body, function (err, rows) {
  
      if (err) {
        res.json(err);
      }
      else {
          
        res.json(rows);
      }
    });
   });
  router.get('/:fk_o_id?', function (req, res, next) {
  suborder.getallsuborderdetail(req.params.fk_o_id,function (err, rows) {
        if (err) {
              res.json(err);
        }
        else {
          
               res.json(rows);
            }
         });
           
         });
  module.exports = router;