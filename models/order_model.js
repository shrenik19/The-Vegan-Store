var db=require('../database');

var order={

addorder:function(item,callback){
    return db.query('insert into order_tbl values(?,?,?,?,?)',[item.o_id,,item.o_price,item.o_date,item.fk_email_id,item.fk_p_id],callback)
},
getOrder:function(fk_email_id,callback){
    return db.query('select * from order_tbl where fk_email_id=?',[fk_email_id],callback)
},
getallOrder:function(callback){
    return db.query('select * from order_tbl',callback)
},
}
module.exports=order;