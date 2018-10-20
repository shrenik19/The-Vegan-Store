var db=require('../database');

var category={

getAllcat:function(callback){
    return db.query('select * from cat_tbl',callback);
},
getallcatById:function(cat_id,callback){
    return db.query('select * from cat_tbl where cat_id=?',[cat_id],callback)
},
addcat:function(item,callback){
     return db.query('insert into cat_tbl (cat_name) values(?)',[item.cat_name],callback);
},
deletecat:function(cat_id,callback){
         return db.query('delete from cat_tbl where cat_id=?',[cat_id],callback)
},
updatecat:function(cat_id,item,callback){
    return db.query('update cat_tbl set cat_name=? where cat_id=?',[item.cat_name,cat_id],callback)
},
deleteAllcat:function(item,callback){
    var delarr=[];
    for(i=0;i<item.length;i++){
        delarr[i]=item[i].cat_id;
    }
    return db.query('delete from cat_tbl where cat_id in (?)',[delarr],callback)
}
}
module.exports=category;