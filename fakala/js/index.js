//bangder文字动态出现
setTimeout(ziti,300);
function ziti(){
   document.getElementById("banderText").style.opacity=1;
   document.getElementById("banderText").style.margin="20px";
   document.getElementById("banderText2").style.opacity=1;}

//渐变轮播图
setInterval(flb,4000);
var ds=document.getElementsByClassName("banner-cell");
var i=1;
function flb(){
        if(i==ds.length){
            ds[ds.length-1].style.opacity=0;
            i=0;
        }
        if(i>=1){
        ds[i-1].style.opacity = 0;
        }
        ds[i].style.opacity=1;
        i++;

    }
