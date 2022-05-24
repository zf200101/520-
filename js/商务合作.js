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
