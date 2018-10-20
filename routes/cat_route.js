var category = require('../models/cat_model')
var express = require('express');
var router = express.Router();


// router.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

router.get('/', function (req, res, next) {
category.getAllcat(function (err, rows) {
    
        if (err) {
          res.json(err);
        }
        else {
          res.json(rows);
        }
    
    });
    
});
  
 router.get('/:cat_id', function (req, res, next) {
   category.getallcatById(req.params.cat_id, function (err, rows) { 
       if (err) {
         res.json(err);
       }
       else {
         res.json(rows);
       }
   });
 });
 router.post('/', function (req, res, next) {
    category.addcat(req.body, function (err, rows) {
  
      if (err) {
        res.json(err);
      }
      else {
        res.json(rows);
      }
    });
});
router.post('/:cat_id', function (req, res, next) {
    category.deletecat(req.params.cat_id, function (err, rows) { 
        if (err) {
          res.json(err);
        }
        else {
          res.json(rows);
        }
    });
});
router.put('/:cat_id', function (req, res, next) {
  category.updatecat(req.params.cat_id, req.body, function (err, rows) {

   if (err) {
      res.json(err);
    }
    else {
      res.json(rows);
    }


 });
});

module.exports = router;