var zuixina=document.getElementById('zuixina');
var zuixinb=document.getElementById('zuixinb');
zuixina.onclick=function(){
    window.location.href='../baogaohtml/报告-最新.html'
}
zuixinb.onclick=function(){
    window.location.href='../baogaohtml/报告-最热.html'
}
// ------------------------------------------------------------
var btn=document.getElementById('btn');
var topulbth=document.getElementById('topulbtn');
window.onload=function(){
    if(localStorage.getItem('name')!=null){
        topulbth.style.display='none'
        btn.innerHTML=localStorage.getItem('name')
        console.log(localStorage.getItem('name'));
    }else{
        topulbth.style.display='block';
    }
    
}

// -------------------------zuoa-------------------------------
var zuoa=document.getElementById('zuoa');
zuoa.onclick=function(){
    window.location.href='../daogou/导购-详情.html'
}
// ---------------------------zuoaxia--------------------------------------
var zuoaxia=document.getElementById('zuoaxia');
zuoaxia.onclick=function(){
    window.location.href='../daogou/导购-详情.html'
}
// -------------------------zuob-------------------------------
var zuob=document.getElementById('zuob');
zuob.onclick=function(){
    window.location.href='../daogou/导购-详情.html'
}
// ---------------------------zuobxia--------------------------------------
var zuobxia=document.getElementById('zuobxia');
zuobxia.onclick=function(){
    window.location.href='../daogou/导购-详情.html'
}
// -------------------------zuoc-------------------------------
var zuoc=document.getElementById('zuoc');
zuoc.onclick=function(){
    window.location.href='../daogou/导购-详情.html'
}
// ---------------------------zuocxia--------------------------------------
var zuocxia=document.getElementById('zuocxia');
zuocxia.onclick=function(){
    window.location.href='../daogou/导购-详情.html'
}
// -------------------------zuod-------------------------------
var zuod=document.getElementById('zuod');
zuod.onclick=function(){
    window.location.href='../daogou/导购-详情.html'
}
// ---------------------------zuodxia--------------------------------------
var zuodxia=document.getElementById('zuodxia');
zuodxia.onclick=function(){
    window.location.href='../daogou/导购-详情.html'
}
// -------------------------zuoe-------------------------------
var zuoe=document.getElementById('zuoe');
zuoe.onclick=function(){
    window.location.href='../daogou/导购-详情.html'
}
// ---------------------------zuoexia--------------------------------------
var zuoexia=document.getElementById('zuoexia');
zuoexia.onclick=function(){
    window.location.href='../daogou/导购-详情.html'
}
// --------------------------------点击加载更多--------------------------
var jiazaiimg1=document.getElementById('jiazaiimg1');
var jiazaiimg2=document.getElementById('jiazaiimg2');
jiazaiimg1.onclick=function(){
    jiazaiimg1.style.background='url(../../img/loading-icon.gif)'
    jiazaiimg2.innerHTML='正在加载中'
}
jiazaiimg2.onclick=function(){
    jiazaiimg1.style.background='url(../../img/loading-icon.gif)'
    jiazaiimg2.innerHTML='正在加载中'
}






















































































