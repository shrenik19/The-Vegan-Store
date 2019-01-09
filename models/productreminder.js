var db=require('../database');

var reminder={

getallbufferproduct:function(callback){
    return db.query('select * from product_tbl where p_qty=buffer_stock',callback)
},

}
module.exports=reminder;