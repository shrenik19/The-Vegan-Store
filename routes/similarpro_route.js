var similar = require('../models/product_model')
var express = require('express');
var router = express.Router();


router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  

router.get('/:fk_cat_id/:p_id', function (req, res, next) {
    
    similar.similarProduct(req.params.fk_cat_id,req.params.p_id,function(err,rows){
        if (err) {
          res.json(err);
        }
        else {
          res.json(rows);
        }
  
      });
});
module.exports = router;