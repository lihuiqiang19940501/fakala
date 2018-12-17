const express=require("express");
const router=express.Router();
const pool=require("../pool");

router.post('/admin',(req,res)=>{
     var aname=req.body.aName;
     var apwd=req.body.aPwd;
    var sql="select * from card_admin where aname=? and apwd=?";
    pool.query(sql,[aname,apwd],(err,result)=>{
        if(err) throw err;
        if(result.length>0){
            
        sessionStorage.setItem("aname",aname);
        sessionStorage.setItem("apwd",apwd);
        res.redirect('/admin.html');
        }else{
        res.redirect('/admin_login.html');
        }
    })
    
})



//导出路由
module.exports=router;
