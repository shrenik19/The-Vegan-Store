var db=require('../database');
  
var order={

addorder:function(item,callback){
    var sts="pending";
    return db.query('insert into order_tbl values(?,?,?,?,?)',[item.o_id,item.o_price,item.o_date,item.fk_email_id,sts],callback)
},
getOrder:function(fk_email_id,callback){
    return db.query('select * from order_tbl where fk_email_id=?',[fk_email_id],callback)
},
getallOrder:function(callback){
    return db.query('select * from order_tbl',callback)
},
deleteAllorder:function(item,callback){
    
    var delarr=[];
    
    for(i=0;i<item.length;i++){
        delarr[i]=item[i].o_id;
    }
    console.log(this.delarr);
    db.query('delete from suborder_tbl where fk_o_id=?',[delarr])
    return db.query('delete from order_tbl where o_id in (?)',[delarr],callback)
},
orderdelete:function(o_id,callback)
{
    db.query('delete from suborder_tbl where fk_o_id=?',[o_id])
    return db.query('delete from order_tbl where o_id=?',[o_id],callback)
},
topfiveorder:function(callback)
{
    db.query('select count(bd.fk_p_id),p.p_name,p.p_price,p.p_img from billdetail_tbl bd,product_tbl p where bd.fk_p_id=p.p_id group by bd.fk_p_id',callback);
},
updateorder:function(o_id,item,callback){
    return db.query('update order_tbl set status=? where o_id=?',[item.status,o_id],callback)
},
}
module.exports=order;