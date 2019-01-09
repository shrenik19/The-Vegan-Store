var db=require('../database');
var billdetail={
    
addbillsum:function(item,callback)
{
    var value=[];
    for(let i=0;i<item.length;i++)
    {
        value[i]=[item[i].fk_bill_id,item[i].fk_p_id,item[i].price,item[i].qty];
    }
    console.log(value);
    return db.query('insert into billdetail_tbl(fk_bill_id,fk_p_id,price,qty) VALUES  ?',[value],callback);
},
getallbilldetail:function(callback)
{
    return db.query('select * from billdetail_tbl',callback)
},
getallpastbillDetail:function(fk_bill_id,callback)
{
    return db.query('select bd.*,d.* from billdetail_tbl bd,product_tbl d where bd.fk_p_id=d.p_id and fk_bill_id=?',[fk_bill_id],callback);
}
}
module.exports=billdetail;