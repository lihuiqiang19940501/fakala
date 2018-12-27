//加载页头
$('body>header').load('header.html');
//**********************验证码模块**********************************
     /*   var c3=document.getElementById("c3");
        var b=c3.getContext("2d");
        //1创建矩形100*30 背景颜色随机;
        b.fillStyle=rc(180,230);
        b.fillRect(0,0,100,30);
        //2创建随机字符串4绘制矩形中;
		var pool = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz";
        
        function resetCode(){
            var cs = new Array();
            for(var i=0;i<4;i++){
            var c=pool[rn(0,pool.length)];
            b.textBaseline="top";
            b.font=`${rn(15,30)}px SimHei`;
            b.fillStyle=rc(30,180);
            b.fillText(c,25*i,0);
            cs[i]=c;
            
            }   
            return cs;
        }
        var yz=resetCode().join("").toUpperCase();
        console.log(yz);
        //3创建5条干扰线
        function ganrao(){
            for(var i=0;i<5;i++){
                b.beginPath();
                b.strokeStyle=rc(0,230);
                b.moveTo(rn(0,120),rn(0,30));
                b.lineTo(rn(0,120),rn(0,30));
                b.stroke();
            }
            //4创建50个干扰点
            for(var i=0;i<50;i++){
                b.fillStyle=rc(0,255)
                b.beginPath();
                b.arc(rn(0,120),rn(0,30),1,0,2*Math.PI);
                b.fill();
            }
         }
         ganrao();
        function rn(min,max){
            var n=Math.random()*(max-min)+min;
            return Math.floor(n);
        }
        function rc(min,max){
            var r=rn(min,max);
            var g=rn(min,max);
            var b=rn(min,max);
            return `rgb(${r},${g},${b})`;
        }
// 点击图片刷新
$("#c3").click(function() {
    b.clearRect(0,0,100,30);
    b.fillStyle=rc(180,230);
    b.fillRect(0,0,100,30);
    resetCode();
    ganrao();
})
*/
function yanzhengma(){
var num1=Math.floor(Math.random()*10);
var num2=Math.floor(Math.random()*10);
var i=Math.floor(Math.random()*3);
var fuhao=["+","-","×"];
$("#yzm").html(`${num1} ${fuhao[i]} ${num2}= ?`)
if(fuhao[i]==='+'){
    num1+=num2;
}
if(fuhao[i]==='-'){
    num1-=num2;
}
if(fuhao[i]==='×'){
    num1*=num2;
}
 return num1;
}
var yz=yanzhengma();
//**********************验证码模块结束**********************************

//验证格式
var reg =new Vue({
    el:".regP",
    data:{
        phone:"",upwd:"",upwds:"",email:"",yzm:"",
        msg1:"请输入11位手机号码",msg2:"6-10位数字或字母组合",msg3:"确认密码",
        msg4:"请输入邮箱",msg5:"",
        spanClassPhone:{fail:false, success:false},
        spanClassUpwd:{fail:false, success:false},
        spanClassUpwds:{fail:false, success:false},
        spanClassEmail:{fail:false, success:false},
        yanzheng:{fail:false, success:false},
        disabled:false,
        agree:"checked"
    },
    watch:{
        phone(){
            if(this.phone==""){
                this.msg1="请输入11位手机号码";
                this.spanClassPhone.fail=false;
                this.spanClassPhone.success=false;
            }
            else if(/^1\d{10}$/.test(this.phone)){
                this.msg1="✔手机号可用";
                //this.spanClass="success";
                this.spanClassPhone.success=true;
                this.spanClassPhone.fail=false;
            }else{
                this.msg1="ㄨ手机号码格式不正确！"
                //this.spanClass="fail";
                this.spanClassPhone.success=false;
                this.spanClassPhone.fail=true;
            }
        },
        upwd(){
            if(this.upwd==""){
                this.msg2="6-10位数字或字母组合";
                this.spanClassUpwd.fail=false;
                this.spanClassUpwd.success=false;
            }
            else if(/^\w{6,10}$/.test(this.upwd)){
                this.msg2="✔格式正确！";
                //this.spanClass="success";
                this.spanClassUpwd.success=true;
                this.spanClassUpwd.fail=false;
            }else{
                this.msg2="ㄨ密码格式不正确！"
                this.spanClassUpwd.success=false;
                this.spanClassUpwd.fail=true;
            }
        },
        upwds(){
            if(this.upwds==""){
                this.msg3="确认密码";
                this.spanClassUpwds.fail=false;
                this.spanClassUpwds.success=false;
            }else 
            if(this.upwds==this.upwd){
                this.msg3="✔密码一致！"
                this.spanClassUpwds.success=true;
                this.spanClassUpwds.fail=false;
            }else{
                this.msg3="ㄨ两次输入密码不一致！"
                this.spanClassUpwds.success=false;
                this.spanClassUpwds.fail=true;
            }
        },
        email(){
            if(this.email==""){
                this.msg4="请输入邮箱";
                this.spanClassEmail.fail=false;
                this.spanClassEmail.success=false;
            }
            else if(/^([0-9A-Za-z\-_\.]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/g.test(this.email)){
                this.msg4="✔邮箱格式正确";
                //this.spanClass="success";
                this.spanClassEmail.success=true;
                this.spanClassEmail.fail=false;
            }else{
                this.msg4="ㄨ邮箱格式有误!"
                //this.spanClass="fail";
                this.spanClassEmail.success=false;
                this.spanClassEmail.fail=true;
            }
        },
        yzm(){
            if(this.yzm==""){
                this.msg5="";
            }
            else if(this.yzm.toUpperCase()==yz){
                this.msg5="✔";
                this.yanzheng.success=true;
                this.yanzheng.fail=false;
            }else{
                this.msg5="ㄨ";
                this.yanzheng.success=false;
                this.yanzheng.fail=true;
            }
        }
    }
})

//点击注册时验证手机号是否已经注册过
$("#phone").blur(function(){
    var phone=$("#phone").val();
    $.ajax({
        type:"post",
        url: '/user/hasphone',
        data: {phone:phone},
        success:function(res){
           if(res.code===201){
            alert("您的手机号: "+phone+" 已注册,请直接登录!")
            location.href="http://127.0.0.1:3333/login.html";
        }else if(res.code===202){
        //    location.href="http://127.0.0.1:3333/index.html";
        return;
        }else
            alertMsg('验证用户名出错！请稍后重试。')
        }
    });
})

$("#submitBtn").on("click",function(){
    var phone=$("#phone").val();
    var upwd=$("#upwd").val();
    var email=$("#email").val();
    var upwds=$("#upwds").val();
    var syzm=$("#syzm").val();
    $.ajax({
        type:"post",
        url: '/user/reg',
        data: {phone:phone,upwd:upwd,upwds:upwds,email:email,syzm:syzm,yz:yz},
        success:function(res){
        if(res.code===0){
            alert("请填写用户名或密码!")
        }else if(res.code===200){
            //注册成功保存用户名,然后首页上加载出手机号
            sessionStorage.setItem("phone",phone);
             alert("注册成功,前往主页!")
            location.href="http://127.0.0.1:3333/index.html";
        }else if(res.code===209){
            alert("两次输入密码不一致,请确认!")
        }else if(res.code===208){
            alert("验证码错误,点击刷新!")
            location.href="http://127.0.0.1:3333/reg.html";
        }else
                alertMsg('验证出错！请重试。')
            }
    
     });
});