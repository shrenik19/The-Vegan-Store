var viewprofile = require('../models/login_model')
var express = require('express');
var router = express.Router();

router.get('/:email_id?', function (req, res, next) {
    
    viewprofile.getAllUserByEmailId(req.params.email_id,function(err,rows){
        if (err) {
          res.json(err);
        }
        else {
          res.json(rows);
        }
  
      });
});
 router.put('/:email_id?', function (req, res, next) {
     viewprofile.updateUser(req.params.email_id, req.body, function (err, rows) {
  
      if (err) {
         res.json(err);
       }
       else {
         res.json(rows);
       }
  
  
    });
  
   });
  module.exports = router;
