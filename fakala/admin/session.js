//页面加载前判断服务器返回的session
$(function(){
    if(sessionStorage.getItem("name") && sessionStorage.getItem("pwd")){
        $("#admin").show();
    }else{
        $("#admin").hide();
        location.href="/admin_login.html";
    }
})
//点击退出系统,清空session
$("#admin").next().click(()=>{
    sessionStorage.clear();
    location.href="/admin_login.html";
})
$('#main aside').click(function(e){
    var $a=$(e.target);
    if($a.is("li.user_list")){
        $a.addClass('color')
        $('#admin_body').load('user_list.html')
    }
})