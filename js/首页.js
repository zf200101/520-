var topulbtn=document.getElementById('topulbtn');
topulbtn.onclick=function(){
    window.location.href='file:///C:/Users/Administrator/Desktop/%E6%9E%81%E6%9E%9C520%E5%BC%A0%E5%B8%86/520-/html/%E7%99%BB%E5%BD%95.html'
}
var topulinp=document.getElementById('topulinp');
topulinp.onblur=function(){
    if(topulinp.value==''){
        alert('请正确输入商品名称');
    }else{
        alert('无此商品')
    }
}
var bai1=document.getElementsByClassName('swiper-slide1')[0];
var img1=document.getElementById('img1');
bai1.onmouseenter=function(){  
    img1.style.opacity='0.5'
}
bai1.onmouseleave=function(){
    img1.style.opacity='1'
}
// ---------------------轮播图1------------------------------
var swiper1=document.getElementsByClassName('swiper-slide1')[0];
swiper1.onclick=function(){
    window.location.href='../shiyong/试用-产品.html'
}
var swiper2=document.getElementsByClassName('swiper-slide2')[0];
swiper2.onclick=function(){
    window.location.href='../shiyong/试用-产品.html'
}
var swiper3=document.getElementsByClassName('swiper-slide3')[0];
swiper3.onclick=function(){
    window.location.href='../shiyong/试用-产品.html'
}
var swiper4=document.getElementsByClassName('swiper-slide4')[0];
swiper4.onclick=function(){
    window.location.href='../shiyong/试用-产品.html'
}
// --------------------轮播图2----------------------------
var swiper21=document.getElementsByClassName('swiper-slide21')[0];
swiper21.onclick=function(){
    window.location.href='../shiyong/试用-产品.html'
}
var swiper22=document.getElementsByClassName('swiper-slide22')[0];
swiper22.onclick=function(){
    window.location.href='../shiyong/试用-产品.html'
}
var swiper23=document.getElementsByClassName('swiper-slide23')[0];
swiper23.onclick=function(){
    window.location.href='../shiyong/试用-产品.html'
}
var swiper24=document.getElementsByClassName('swiper-slide24')[0];
swiper24.onclick=function(){
    window.location.href='../shiyong/试用-产品.html'
}
// ----------------------轮播图3--------------------------------
var swiper321=document.getElementsByClassName('swiper-slide321')[0];
swiper321.onclick=function(){
    window.location.href='../shiyong/试用-产品.html'
}
var swiper322=document.getElementsByClassName('swiper-slide322')[0];
swiper322.onclick=function(){
    window.location.href='../shiyong/试用-产品.html'
}
var swiper323=document.getElementsByClassName('swiper-slide323')[0];
swiper323.onclick=function(){
    window.location.href='../shiyong/试用-产品.html'
}
var swiper324=document.getElementsByClassName('swiper-slide324')[0];
swiper324.onclick=function(){
    window.location.href='../shiyong/试用-产品.html'
}
// ------------报告精选-----------------------------
// ---------------baogaob--------------------------------------
var baogaoba=document.getElementById('baogaoba');
baogaoba.onclick=function(){
    window.location.href='../daogou/导购-详情.html'
}
var baogaobb=document.getElementById('baogaobb');
baogaobb.onclick=function(){
    window.location.href='../daogou/导购-详情.html'
}
var baogaobc=document.getElementById('baogaobc');
baogaobc.onclick=function(){
    window.location.href='../daogou/导购-详情.html'
}
var baogaobd=document.getElementById('baogaobd');
baogaobd.onclick=function(){
    window.location.href='../daogou/导购-详情.html'
}
// -----------------------baogaobc1---------------------------------
var baogaobca=document.getElementById('baogaobca');
baogaobca.onclick=function(){
    window.location.href='../daogou/导购-详情.html'
}
var baogaobcb=document.getElementById('baogaobcb');
baogaobcb.onclick=function(){
    window.location.href='../daogou/导购-详情.html'
}
var baogaobcc=document.getElementById('baogaobcc');
baogaobcc.onclick=function(){
    window.location.href='../daogou/导购-详情.html'
}
var baogaobcd=document.getElementById('baogaobcd');
baogaobcd.onclick=function(){
    window.location.href='../daogou/导购-详情.html'
}
// --------------------------导购精选---------------------------------------
// --------------------------小红心--------------------------------------
var daogoubaca=document.getElementById('daogoubaca');
daogoubaca.onclick=function(){
    daogoubaca.style.background='url(../../img/heart_h.png) no-repeat'
    event.stopPropagation();
}
daogoubaca.ondblclick=function(){
    daogoubaca.style.background='url(../../img/heart.png) no-repeat'
    event.stopPropagation();
}
// -------------------daogoubb----------------
var daogoubbca=document.getElementById('daogoubbca');
daogoubbca.onclick=function(){
    daogoubbca.style.background='url(../../img/heart_h.png) no-repeat'
    event.stopPropagation();
}
daogoubbca.ondblclick=function(){
    daogoubbca.style.background='url(../../img/heart.png) no-repeat'
    event.stopPropagation();
}
// ------------------daogoubc-------------------------------
var daogoubcca=document.getElementById('daogoubcca');
daogoubcca.onclick=function(){
    daogoubcca.style.background='url(../../img/heart_h.png) no-repeat'
    event.stopPropagation();
}
daogoubcca.ondblclick=function(){
    daogoubcca.style.background='url(../../img/heart.png) no-repeat'
    event.stopPropagation();
}
// ------------------daogoubd-------------------------------
var daogoubdca=document.getElementById('daogoubdca');
daogoubdca.onclick=function(){
    daogoubdca.style.background='url(../../img/heart_h.png) no-repeat'
    event.stopPropagation();
}
daogoubdca.ondblclick=function(){
    daogoubdca.style.background='url(../../img/heart.png) no-repeat'
    event.stopPropagation();
}
// -----------------------------------------------------------
var daogouba=document.getElementById('daogouba');
daogouba.onclick=function(){
    window.location.href='../daogou/导购-详情.html'
}
var daogoubb=document.getElementById('daogoubb');
daogoubb.onclick=function(){
    window.location.href='../daogou/导购-详情.html'
}
var daogoubc=document.getElementById('daogoubc');
daogoubc.onclick=function(){
    window.location.href='../daogou/导购-详情.html'
}
var daogoubd=document.getElementById('daogoubd');
daogoubd.onclick=function(){
    window.location.href='../daogou/导购-详情.html'
}
// --------------------------------------------发现酷玩------------------------------------------------
// ---------------------kuwanaa-----------------------------
var kuwanaaa=document.getElementById('kuwanaaa');
kuwanaaa.onclick=function(){
    kuwanaaa.style.background='url(../../img/heart_h.png) no-repeat'
    event.stopPropagation();
}
kuwanaaa.ondblclick=function(){
    kuwanaaa.style.background='url(../../img/heart.png) no-repeat'
    event.stopPropagation();
}
var kuwanaa=document.getElementById('kuwanaa');
kuwanaa.onclick=function(){
    window.location.href='../shiyong/试用-产品.html'
}
// ----------------------kuwanab-----------------------------
var kuwanaba=document.getElementById('kuwanaba');
kuwanaba.onclick=function(){
    kuwanaba.style.background='url(../../img/heart_h.png) no-repeat'
    event.stopPropagation();
}
kuwanaba.ondblclick=function(){
    kuwanaba.style.background='url(../../img/heart.png) no-repeat'
    event.stopPropagation();
}
var kuwanab=document.getElementById('kuwanab');
kuwanab.onclick=function(){
    window.location.href='../shiyong/试用-产品.html'
}
// ----------------------kuwanac-----------------------------
var kuwanaca=document.getElementById('kuwanaca');
kuwanaca.onclick=function(){
    kuwanaca.style.background='url(../../img/heart_h.png) no-repeat'
    event.stopPropagation();
}
kuwanaca.ondblclick=function(){
    kuwanaca.style.background='url(../../img/heart.png) no-repeat'
    event.stopPropagation();
}
var kuwanac=document.getElementById('kuwanac');
kuwanac.onclick=function(){
    window.location.href='../shiyong/试用-产品.html'
}
// ----------------------kuwanad-----------------------------
var kuwanada=document.getElementById('kuwanada');
kuwanada.onclick=function(){
    kuwanada.style.background='url(../../img/heart_h.png) no-repeat'
    event.stopPropagation();
}
kuwanada.ondblclick=function(){
    kuwanada.style.background='url(../../img/heart.png) no-repeat'
    event.stopPropagation();
}
var kuwanad=document.getElementById('kuwanad');
kuwanad.onclick=function(){
    window.location.href='../shiyong/试用-产品.html'
}

// -----------------------------------------------kuwanb-------------------------------------------------
// ---------------------kuwanba-----------------------------
var kuwanbaa=document.getElementById('kuwanbaa');
kuwanbaa.onclick=function(){
    kuwanbaa.style.background='url(../../img/heart_h.png) no-repeat'
    event.stopPropagation();
}
kuwanbaa.ondblclick=function(){
    kuwanbaa.style.background='url(../../img/heart.png) no-repeat'
    event.stopPropagation();
}
var kuwanba=document.getElementById('kuwanba');
kuwanba.onclick=function(){
    window.location.href='../shiyong/试用-产品.html'
}
// ----------------------kuwanbb-----------------------------
var kuwanbba=document.getElementById('kuwanbba');
kuwanbba.onclick=function(){
    kuwanbba.style.background='url(../../img/heart_h.png) no-repeat'
    event.stopPropagation();
}
kuwanbba.ondblclick=function(){
    kuwanbba.style.background='url(../../img/heart.png) no-repeat'
    event.stopPropagation();
}
var kuwanbb=document.getElementById('kuwanbb');
kuwanbb.onclick=function(){
    window.location.href='../shiyong/试用-产品.html'
}
// ----------------------kuwanbc-----------------------------
var kuwanbca=document.getElementById('kuwanbca');
kuwanbca.onclick=function(){
    kuwanbca.style.background='url(../../img/heart_h.png) no-repeat'
    event.stopPropagation();
}
kuwanbca.ondblclick=function(){
    kuwanbca.style.background='url(../../img/heart.png) no-repeat'
    event.stopPropagation();
}
var kuwanbc=document.getElementById('kuwanbc');
kuwanbc.onclick=function(){
    window.location.href='../shiyong/试用-产品.html'
}
// ----------------------kuwanbd-----------------------------
var kuwanbda=document.getElementById('kuwanbda');
kuwanbda.onclick=function(){
    kuwanbda.style.background='url(../../img/heart_h.png) no-repeat'
    event.stopPropagation();
}
kuwanbda.ondblclick=function(){
    kuwanbda.style.background='url(../../img/heart.png) no-repeat'
    event.stopPropagation();
}
var kuwanbd=document.getElementById('kuwanbd');
kuwanbd.onclick=function(){
    window.location.href='../shiyong/试用-产品.html'
}
// -----------------------------------------------kuwanc-------------------------------------------------
// ---------------------kuwanca-----------------------------
var kuwancaa=document.getElementById('kuwancaa');
kuwancaa.onclick=function(){
    kuwancaa.style.background='url(../../img/heart_h.png) no-repeat'
    event.stopPropagation();
}
kuwancaa.ondblclick=function(){
    kuwancaa.style.background='url(../../img/heart.png) no-repeat'
    event.stopPropagation();
}
var kuwanca=document.getElementById('kuwanca');
kuwanca.onclick=function(){
    window.location.href='../shiyong/试用-产品.html'
}
// ----------------------kuwanbb-----------------------------
var kuwancba=document.getElementById('kuwancba');
kuwancba.onclick=function(){
    kuwancba.style.background='url(../../img/heart_h.png) no-repeat'
    event.stopPropagation();
}
kuwancba.ondblclick=function(){
    kuwancba.style.background='url(../../img/heart.png) no-repeat'
    event.stopPropagation();
}
var kuwancb=document.getElementById('kuwancb');
kuwancb.onclick=function(){
    window.location.href='../shiyong/试用-产品.html'
}
// ----------------------kuwancc-----------------------------
var kuwancca=document.getElementById('kuwancca');
kuwancca.onclick=function(){
    kuwancca.style.background='url(../../img/heart_h.png) no-repeat'
    event.stopPropagation();
}
kuwancca.ondblclick=function(){
    kuwanbca.style.background='url(../../img/heart.png) no-repeat'
    event.stopPropagation();
}
var kuwancc=document.getElementById('kuwancc');
kuwancc.onclick=function(){
    window.location.href='../shiyong/试用-产品.html'
}
// ----------------------kuwancd-----------------------------
var kuwancda=document.getElementById('kuwancda');
kuwancda.onclick=function(){
    kuwancda.style.background='url(../../img/heart_h.png) no-repeat'
    event.stopPropagation();
}
kuwancda.ondblclick=function(){
    kuwancda.style.background='url(../../img/heart.png) no-repeat'
    event.stopPropagation();
}
var kuwancd=document.getElementById('kuwancd');
kuwancd.onclick=function(){
    window.location.href='../shiyong/试用-产品.html'
}

// -----------------------------------------------kuwand-------------------------------------------------
// ---------------------kuwanda-----------------------------
var kuwandaa=document.getElementById('kuwandaa');
kuwandaa.onclick=function(){
    kuwandaa.style.background='url(../../img/heart_h.png) no-repeat'
    event.stopPropagation();
}
kuwandaa.ondblclick=function(){
    kuwandaa.style.background='url(../../img/heart.png) no-repeat'
    event.stopPropagation();
}
var kuwanda=document.getElementById('kuwanda');
kuwanda.onclick=function(){
    window.location.href='../shiyong/试用-产品.html'
}
// ----------------------kuwandb-----------------------------
var kuwandba=document.getElementById('kuwandba');
kuwandba.onclick=function(){
    kuwandba.style.background='url(../../img/heart_h.png) no-repeat'
    event.stopPropagation();
}
kuwandba.ondblclick=function(){
    kuwandba.style.background='url(../../img/heart.png) no-repeat'
    event.stopPropagation();
}
var kuwandb=document.getElementById('kuwandb');
kuwandb.onclick=function(){
    window.location.href='../shiyong/试用-产品.html'
}
// ----------------------kuwandc-----------------------------
var kuwandca=document.getElementById('kuwandca');
kuwandca.onclick=function(){
    kuwandca.style.background='url(../../img/heart_h.png) no-repeat'
    event.stopPropagation();
}
kuwandca.ondblclick=function(){
    kuwanbda.style.background='url(../../img/heart.png) no-repeat'
    event.stopPropagation();
}
var kuwandc=document.getElementById('kuwandc');
kuwandc.onclick=function(){
    window.location.href='../shiyong/试用-产品.html'
}
// ----------------------kuwandd-----------------------------
var kuwandda=document.getElementById('kuwandda');
kuwandda.onclick=function(){
    kuwandda.style.background='url(../../img/heart_h.png) no-repeat'
    event.stopPropagation();
}
kuwandda.ondblclick=function(){
    kuwandda.style.background='url(../../img/heart.png) no-repeat'
    event.stopPropagation();
}
var kuwandd=document.getElementById('kuwandd');
kuwandd.onclick=function(){
    window.location.href='../shiyong/试用-产品.html'
}




























