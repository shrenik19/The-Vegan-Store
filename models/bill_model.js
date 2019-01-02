var db=require('../database');
var bill={
    
addbill:function(item,callback)
{
    var d=new Date();
    return db.query('insert into bill_tbl(bill_amt,date,fk_email_id) values(?,?,?)',[item.bill_amt,d,item.fk_email_id],callback);
},
getallbill:function(callback)
{
    return db.query('select * from bill_tbl',callback)
}
}
module.exports=bill;