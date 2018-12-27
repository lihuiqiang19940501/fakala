//异步加载页头页尾
/*异步加载页头和页尾*/
/*$('body>div.container-fluid>header').html(`
<div class="row" id="nav_top">
		<div class="logop">
			<a href="#"><img src="img/logo2.png" class="logo"></a>
		</div>
		<ul class="nav_first">
			<li><a href="javascript:;">首页</a></li>
			<li><a href="javascript:;">产品服务</a></li>
			<li><a href="javascript:;">个人寄售</a></li>
			<li><a href="javascript:;">商家入驻</a></li>
		</ul>
		<div>
			<div class="search">
				<input type="text" class="btn btn-outline-warning pl-0">
				<input type="button" class="btn btn-warning" value="查询订单" placeholder="输入订单号快速查询">
			</div>
		</div>
		<ul  class="nav_login">
			<li><a href="javascript:;">登录</a></li>
			<li><a href="javascript:;">注册</a></li>
			<li><a href="javascript:;">帮助</a></li>
			<li><a href="javascript:;">投诉</a></li>
		</ul>
		<div class="nav-icon" id="icon">
			<span></span>
			<span></span>
			<span></span>
		</div>
	</div>
	<div class="nav_login_icon">
		<ul class="rt icon1">
			<li><a href="javascript:;">登录</a></li>
			<li><a href="javascript:;">注册</a></li>
			<li><a href="javascript:;">帮助</a></li>
			<li><a href="javascript:;">投诉</a></li>
		</ul>
		<ul class="rt icon2">
			<li><a href="javascript:;">首页</a></li>
			<li><a href="javascript:;">产品服务</a></li>
			<li><a href="javascript:;">个人寄售</a></li>
			<li><a href="javascript:;">商家入驻</a></li>
		</ul>
	</div>
`)*/
 $('body>div.container-fluid>header').load('header.html');
 if(sessionStorage.getItem("phone")){
 $(".join").html('进入后台管理'); 
 }
// ,function(){
//     $.ajax({
//         url: 'data/user/session_data.php',
//         success: function(result){
//             if(result.uname){
//                 $('.login_info').html('<li>&nbsp;欢迎:'+result.uname+' <a href="logout.html" title="退出登录">退出</a><b>|</b></li><li><a href="uc_basic.html" title="用户中心">用户中心</a></li>');
//                 $('[href="logout.html"]').click(function(e){
//                     e.preventDefault();
//                     $.ajax({
//                         url: 'data/user/logout.php',
//                         success: function(result){
//                             if(result.code===200){
//                                 alertMsg('<h4>退出成功</h4>点击确定重新返回登录页面');
//                                 $('#alertMsg').on('click', '#alertMsg_btn1 cite', function (e) {
//                                     e.preventDefault();
//                                     location.href = 'login.html';
//                                 })
//                             }else {
//                                 alertMsg('登录退出失败！原因：'+result.msg);
//                             }
//                         }
//                     })
//                 });
//             }
//         }
//     });
// }

// $('body > .footer').load('footer.html');
// 响应式监视窗口大小大于991隐藏下拉导航栏
$(window).resize(function () { //当浏览器大小变化时
    var $wid=$(window).width(); 
    var $ul=$(".nav_login_icon ul")
     if($wid>991)
         $ul.css("opacity","0");
 });
 
//渐变轮播图
function lunbo(){
    if(!($("#banner").hasClass("bannerP2"))){
        $("#banner").addClass("bannerP2");
        $("#banner div.text1").addClass("hide");
        $("#banner div.text2").addClass("show");
    }else{
        $("#banner").removeClass("bannerP2");
        $("#banner div.text1").removeClass("hide");
        $("#banner div.text2").removeClass("show");
    }
}
setInterval(lunbo,4000);

//点击icon出现下拉框
//$("#nav_top #icon").click(function(){
  $("header").on("click",function(e){
        var t=e.target;
        if(t.className=="nav-icon"){
            var $ul=$(".nav_login_icon .icon1")
            var $wid=$(window).width()
            if($wid>=768){
                if($ul.css("opacity")==0)
                $ul.css("opacity","1")
                else
                $ul.css("opacity","0")
            }else{
            var $ul=$(".nav_login_icon ul")
            if($ul.css("opacity")==0)
            $ul.css("opacity","1")
            else
                $ul.css("opacity","0")
            }
    }
});

//点击查看费率 
$("#rec h3 a").mousedown(function(){
    $("#rec>div>ul>li span.cardName").hide();
    $("#rec div ul li span.cardSell").show();

})
$("#rec h3 a").mouseup(function(){
    $("#rec>div>ul>li span.cardName").show();
    $("#rec div ul li span.cardSell").hide();
    })

//side鼠标点击事件----------未完善------------
$("#side").click(function(e){
    var $li=$(e.target);
    var i=$li.index();
    if(i==0){

    }else if(i==1){

    }else if(i==2){

    }
    else if(i==3){

    }
    else if(i==4){
        $(document).scrollTop(0);
    }
    

})
// 异步加载公告新闻栏
$.ajax({
    url:"/news",
    success:function(res){
        var last=res[res.length-1];
        var ntime=last.ntime.slice(0,10);
        var adHtml=`<i></i>
        <span class="ggDate">${ntime}</span>
        <span>&nbsp;|&nbsp;</span>
        <a href="javascript:;">${last.ntitle}</a>&nbsp;：
        <span class="ggDetails">${last.ndetails}</span>
        <a href="javascript:;">查看更多..</a>`;
        $(".bulletin").html(adHtml);
    }
})
// 异步加载两行官方回购卡
$.ajax({
    url:"/card/class",
    type:"get",
    success:function(res){
        var ul1="",ul2="";
        for(i=0;i<4;i++){
            ul1+=`<li>
                    <img src="${res[i].cpic}" alt="">
                    <span class="cardName">${res[i].cname}</span>
                    <span class="cardSell">${res[i].rate}折回购</span>
                    <span class="showbtn">我要出售</span>
                   </li>`;
            ul2+=`<li>
            <img src="${res[i+4].cpic}" alt="">
            <span class="cardName">${res[i+4].cname}</span>
            <span class="cardSell">${res[i+4].rate}折回购</span>
            <span class="showbtn">我要出售</span>
           </li>`;       
        }
        $(".card_class1").html(ul1);
        $(".card_class2").html(ul2);
    }
})