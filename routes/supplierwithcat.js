var supplier = require('../models/supplier_model')
var express = require('express');
var router = express.Router();

 router.get('/:cat_name', function (req, res, next) {
   supplier.getallsupplierByCat(req.params.cat_name, function (err, rows) { 
       if (err) {
         res.json(err);
       }
       else {
         res.json(rows);
       }
   });
 });
module.exports = router;