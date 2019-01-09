var supplier = require('../models/supplier_model')
var express = require('express');
var router = express.Router();


// router.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

router.get('/', function (req, res, next) {
supplier.getallsupplierwithProname(function (err, rows) {
    
        if (err) {
          res.json(err);
        }
        else {
          res.json(rows);
        }
    
    });
    
});
  
 router.get('/:s_id', function (req, res, next) {
   supplier.getallsupplierById(req.params.s_id, function (err, rows) { 
       if (err) {
         res.json(err);
       }
       else {
         res.json(rows);
       }
   });
 });
 router.post('/', function (req, res, next) {
    supplier.addsupplier(req.body, function (err, rows) {
  
      if (err) {
        res.json(err);
      }
      else {
        res.json(rows);
      }
    });
});
router.post('/:s_id', function (req, res, next) {
    supplier.deletesupplier(req.params.s_id, function (err, rows) { 
        if (err) {
          res.json(err);
        }
        else {
          res.json(rows);
        }
    });
});
router.put('/:s_id?', function (req, res, next) {
  supplier.updatesupplier(req.params.s_id, req.body, function (err, rows) {

   if (err) {
      res.json(err);
    }
    else {
      res.json(rows);
    }


 });
});

module.exports = router;