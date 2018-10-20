var product = require('../models/product_model')
var express = require('express');
var router = express.Router();
var multer=require('multer');
var path=require('path');

// router.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });



 var storage = multer.diskStorage({
   destination: (req, file, cb) => {
   cb(null, 'public/images/product')
   },
   filename: (req, file, cb) => {
   x=file.fieldname + '-' + Date.now()+path.extname(file.originalname);
   cb(null, file.fieldname + '-' + Date.now()+path.extname(file.originalname))
  }
   });
   var upload = multer({storage: storage});
   router.post('/',upload.single('p_img'), function (req, res, next) {
    product.addproduct(req.body,req.file.filename,function (err, rows) {
  console.log(req.body,req.file.filename)
      if (err) {
        res.json(err);
      }
      else {
        res.json(rows);
      }
    });
   });
   module.exports = router;