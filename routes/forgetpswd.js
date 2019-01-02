var forget = require('../models/forgetpswd_model')
var express = require('express');
var router = express.Router();

router.get('/:email_id?', function (req, res, next) {
    
      forget.getpwsd(req.params.email_id,function(err,rows){
        if (err) {
          res.json(err);
        }
        else {
          res.json(rows);
        }
  
      });
});
module.exports = router;