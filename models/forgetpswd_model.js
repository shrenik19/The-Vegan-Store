var db=require('../database');

var forget={

getpwsd:function(email_id,callback)
{
    return db.query('Select * from information_tbl where email_id=?',[email_id],callback);
}
}
module.exports=forget;