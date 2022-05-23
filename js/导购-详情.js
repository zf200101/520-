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
