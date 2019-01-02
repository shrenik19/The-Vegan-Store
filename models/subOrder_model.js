var db=require('../database');
var suborder={
    
addordersum:function(item,callback)
{
    var value=[];
    for(let i=0;i<item.length;i++)
    {
        value[i]=[item[i].fk_o_id,item[i].fk_p_id,item[i].qty,item[i].price];
    }
    return db.query('insert into suborder_tbl(fk_o_id,fk_p_id,qty,price) VALUES ?',[value],callback);
},
getallsuborderdetail:function(callback)
{
    return db.query('select * from suborder_tbl',callback)
},
getallsuborderDetail:function(fk_o_id,callback)
{
     return db.query('select o.*,so.* from order_tbl o,suborder_tbl so where so.fk_o_id=o.o_id and fk_o_id=?',[fk_o_id],callback);
}
}
module.exports=suborder;