var db=require('../database');

var login={

getAllUserById:function(item,callback)
{
    return db.query('Select * from information_tbl where email_id=? and password=?',[item.email_id,item.password],callback);
}
}
module.exports=login;