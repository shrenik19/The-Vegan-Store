var deleteallpro = require('../models/product_model')
var express = require('express');
var router = express.Router();

    
router.post('/', function (req, res, next) {
    deleteallpro.deleteAllpro(req.body, function (err, rows) { 
        if (err) {
          res.json(err);
        }
        else {
          res.json(rows);
        }
    });
});

router.get('/:cat_name', function (req, res, next) {
  deleteallpro.getallproBycat(req.params.cat_name, function (err, rows) { 
      if (err) {
        res.json(err);
      }
      else {
        res.json(rows);
      }
  });
});

module.exports = router;