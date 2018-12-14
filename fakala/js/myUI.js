jQuery.fn.accordion=function(){
  //this->插件的父元素
  var $parent=this;
  //1. 侵入class和自定义属性
  $parent.addClass("accordion")//div.accordion
        .children(":even").addClass("title")
        //div.title*3
        .next().addClass("content fade")
        .first().addClass("in")//div.content*3
        //div.content中第1个
  //在页面上引入myUI/.css和.js
  //在页面上调用$("#my-accordion").accordion()
  //2. 绑定事件
  $parent.on("click",".title",e=>
    $(e.target).next(".content")
      .toggleClass("in")
      .siblings(".content").removeClass("in")
  );
}