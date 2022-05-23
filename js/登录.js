var che = document.getElementById('jzmm');
if(localStorage.getItem('checked')){
    var user =document.getElementsByClassName('user')[0].value = localStorage.getItem('phone')
    var pas = document.getElementsByClassName('pas')[0].value = localStorage.getItem('password')
    che.checked =localStorage.getItem('checked');
    // var login_1_p2 =document.getElementsByClassName('login_1_p2')[0];
    // login_1_p2.parentNode.removeChild(login_1_p2);
}


var user =document.getElementsByClassName('user')[0];
console.log(user);

user.onblur = function(){
    var uesr1= document.getElementsByClassName('uesr1')[0]
    if(user.value.length!=0){
        if(user.value==localStorage.getItem('phone')){
            uesr1.innerHTML='手机号正确'
            uesr1.style.color = 'green'
        }else{
            uesr1.innerHTML='手机号不存在'
            uesr1.style.color = 'red'
        }
    }else{
        uesr1.innerHTML='手机号不能为空'
        uesr1.style.color = 'red'
    }
}
var pas = document.getElementsByClassName('pas')[0]
pas.onblur =function(){
    var pas1=document.getElementsByClassName('pas1')[0];
    if(pas.value.length!=0){
        if(pas.value==localStorage.getItem('password')){
            pas1.innerHTML='密码正确'
            pas1.style.color='green'
        }else{
            pas1.innerHTML='密码错误'
            pas1.style.color='red'
        }
    }else{
        pas1.innerHTML='密码不能为空'
            pas1.style.color='red'
    }
}


var hqyzm = document.getElementsByClassName('hqyzm')[0];
hqyzm.onclick =function(){
    var ind = 60;
    clearInterval(time)
    var time = setInterval(function(){
        ind--
        if(ind == 58){
            alert('验证码：9527')
        }
        hqyzm.innerHTML = ind + '秒后重新获取'
        if(ind<1){
            ind=60;
            hqyzm.innerHTML = '点击获取验证码'
        }
    },1000)
}


var yzm = document.getElementsByClassName('yzm')[0];
yzm.onblur = function(){
var yzm1=document.getElementsByClassName('yzm1')[0];
    if(yzm.value.length!=0){
        if(yzm.value=='9527'){
            yzm1.innerHTML='验证码正确'
            yzm1.style.color='green'
        }else{
            yzm1.innerHTML='验证码错误'
            yzm1.style.color='red'
        }
    }else{
        yzm1.innerHTML='验证码不能为空'
        yzm1.style.color='red'
    }
}


var btn = document.getElementById('btn');

btn.onclick =function(){
    console.log(che.checked);
    if(user.value==localStorage.getItem('phone')&&pas.value==localStorage.getItem('password')&&yzm.value=='9527'){
        
        window.location.href="../html/shouye/首页.html"
    }else {
        alert('用户不存在，请重新注册')
    }
    if(che.checked==true){
        localStorage.setItem('checked',che.checked)
    }else if(che.checked==false){
        localStorage.removeItem('phone')
        localStorage.removeItem('password')
        localStorage.removeItem('checked')
    }
}


