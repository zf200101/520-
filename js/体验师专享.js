var topulbtn=document.getElementById('topulbtn');
topulbtn.onclick=function(){
    window.location.href='../登录.html'
}
var topulinp=document.getElementById('topulinp');
topulinp.onblur=function(){
    if(topulinp.value==''){
        alert('请正确输入商品名称');
    }else{
        alert('无此商品')
    }
}

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
// -------------------------------------------------------------------------
function oajax(){
    var oajax=new XMLHttpRequest();
oajax.open('get','http://127.0.0.1:3000/useing/public');
oajax.send();
oajax.onreadystatechange=function(){
    if(oajax.readyState==4){
        if(oajax.status==200){
            console.log(oajax.responseText);
            var arry = JSON.parse(oajax.responseText)
            aj(arry)
        }
    }
}
}

function aj(arry) {
    var str = '';
    for (var item of arry) {
       
            str += `
            <li class="useli">
                <img src="${item.img}" alt="">
                <p><strong>${item.text}</strong> </p>
                <span class="usespan">2032</span><span class="usespan">20台</span>
                <p><span class="red">1392</span>申请</p>
                <p>报告数量：8</p>
                <div class="ding">首发</div>
                
            </li>
            `
        

    }

    var zuixin_ = document.getElementsByClassName('use')[0];
    zuixin_.innerHTML = str
}

// ----------------------------------------
var end=document.getElementById('end');
var foot=document.getElementById('foot');
var hui=document.getElementsByClassName('hui')[0];
end.onclick=function(){
    end.style.color='red';
    hui.style.height='2000'+'px';
    function oajax_(){
        var oajax_=new XMLHttpRequest();
    oajax_.open('get','http://127.0.0.1:3000/useing/master');
    oajax_.send();
    oajax_.onreadystatechange=function(){
        if(oajax_.readyState==4){
            if(oajax_.status==200){
                console.log(oajax_.responseText);
                var arry = JSON.parse(oajax_.responseText)
                aj(arry)
            }
        }
    }
    }
    
    function aj(arry) {
        var str = '';
        for (var item of arry) {
           
                str += `
                <li class="useli">
                    <img src="${item.img}" alt="">
                    <p><strong>${item.text}</strong> </p>
                    <span class="usespan">2032</span><span class="usespan">20台</span>
                    <p><span class="red">1392</span>申请</p>
                    <p>报告数量：8</p>
                    <div class="ding">首发</div>
                    
                </li>
                `
            
    
        }
    
        var zuixin_ = document.getElementsByClassName('use')[0];
        zuixin_.innerHTML = str
    }
    

    return oajax_();




}
var shenqing=document.getElementById('shenqing');

shenqing.onclick=function(){
    shenqing.style.color='red';
    hui.style.height='2000'+'px';
    function oajax_(){
        var oajax_=new XMLHttpRequest();
    oajax_.open('get','http://127.0.0.1:3000/useing/master');
    oajax_.send();
    oajax_.onreadystatechange=function(){
        if(oajax_.readyState==4){
            if(oajax_.status==200){
                console.log(oajax_.responseText);
                var arry = JSON.parse(oajax_.responseText)
                aj(arry)
            }
        }
    }
    }
    
    function aj(arry) {
        var str = '';
        for (var item of arry) {
           
                str += `
                <li class="useli">
                    <img src="${item.img}" alt="">
                    <p><strong>${item.text}</strong> </p>
                    <span class="usespan">2032</span><span class="usespan">20台</span>
                    <p><span class="red">1392</span>申请</p>
                    <p>报告数量：8</p>
                    <div class="ding">首发</div>
                    
                </li>
                `
            
    
        }
    
        var zuixin_ = document.getElementsByClassName('use')[0];
        zuixin_.innerHTML = str
    }
    

    return oajax_();




}
var shiyong=document.getElementById('shiyong');

shiyong.onclick=function(){
    shiyong.style.color='red';
    hui.style.height='2000'+'px';
    function oajax_(){
        var oajax_=new XMLHttpRequest();
    oajax_.open('get','http://127.0.0.1:3000/useing/master');
    oajax_.send();
    oajax_.onreadystatechange=function(){
        if(oajax_.readyState==4){
            if(oajax_.status==200){
                console.log(oajax_.responseText);
                var arry = JSON.parse(oajax_.responseText)
                aj(arry)
            }
        }
    }
    }
    
    function aj(arry) {
        var str = '';
        for (var item of arry) {
           
                str += `
                <li class="useli">
                    <img src="${item.img}" alt="">
                    <p><strong>${item.text}</strong> </p>
                    <span class="usespan">2032</span><span class="usespan">20台</span>
                    <p><span class="red">1392</span>申请</p>
                    <p>报告数量：8</p>
                    <div class="ding">首发</div>
                    
                </li>
                `
            
    
        }
    
        var zuixin_ = document.getElementsByClassName('use')[0];
        zuixin_.innerHTML = str
    }
    

    return oajax_();




}
var dazhong=document.getElementById('dazhong');
dazhong.onclick=function(){
    window.location.href='../shiyong/试用-全部.html'
}

