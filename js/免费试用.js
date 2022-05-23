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