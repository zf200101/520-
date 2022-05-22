
//手机号验证
var phone = document.getElementById('phone');
var phone1 =document.getElementsByClassName('phone1')[0]
var str = /^1[3-9][0-9]{9}$/;
phone.onblur=function(){
    if(phone.value.length !== 0){
        if(str.test(phone.value)){
            phone1.innerHTML = '√手机格式正确'
            phone1.style.color = 'green'
        }else{
            phone1.innerHTML = '×手机格式错误'
            phone1.style.color = 'red'
        } 
    }else{
        phone1.innerHTML = '×手机号不能为空'
        phone1.style.color = 'red'
    }
    
} ;
//图片验证
var imga = document.getElementById('imga');
var ym  = 'r2b7';
// console.log(typeof ym);
imga.onblur = function(){
    var imga1 =document.getElementsByClassName('imga1')[0]
    if(imga.value.length != 0){
        if(imga.value == 'r2b7'){
            imga1.innerHTML = '√验证码格式正确'
            imga1.style.color = 'green'
        }else{
            imga1.innerHTML = '×验证码错误'
            imga1.style.color = 'red'
        }
    }else{
        imga1.innerHTML = '×验证码不能为空'
        imga1.style.color = 'red'
    }
}


var hyyzm = document.getElementById('hyyzm');
    hyyzm.onclick =function(){
        var ind = 60;
        var ste = setInterval(function(){
            ind--;
            hyyzm.innerHTML = ind + '秒后重新获取'
            if(ind == 57){
                alert('验证码为 ：0728')
            }
            if(ind == 0){
                ind=60;
                hyyzm.innerHTML = '获取验证码'
                clearInterval(ste)
            }
        },1000)
    }


var yzm = document.getElementById('yzm');
var yzm1 = document.getElementsByClassName('yzm1')[0]
yzm.onblur = function(){
    if(yzm.value.length!==0){
        if(yzm.value=='0728'){
            yzm1.innerHTML='√验证码格式正确'
            yzm1.style.color = 'green'
        }else{
            yzm1.innerHTML='×验证码错误'
            yzm1.style.color = 'red'
        }
        
    }else{
        yzm1.innerHTML='×验证码不能为空'
        yzm1.style.color = 'red'
    }
}

var user = document.getElementById('user');
var user1= document.getElementsByClassName('user1')[0];
var str2 = /^[\u4e00-\u9fa5a-z0-9]+$/i
user.onblur = function(){
    
    if(user.value.length!=0){
        if(str2.test(user.value)){
            user1.innerHTML='√用户名正确'
            user1.style.color = 'green'
        }else{
            user1.innerHTML='×用户名错误'
            user1.style.color = 'red'
        }
    }else{
        user1.innerHTML='×用户名不能为空'
        user1.style.color = 'red'
    }
}

var pas1 = document.getElementById('pas1');
var str3 = /^[a-z0-9]{6,9}$/i
pas1.onblur =function(){
    var pas1_1=document.getElementsByClassName('pas1_1')[0]
    
    if(pas1.value.length!=0){
        if(str3.test(pas1.value)){
            pas1_1.innerHTML='√密码正确'
            pas1_1.style.color = 'green'
        }else{
            pas1_1.innerHTML='×密码格式错误'
            pas1_1.style.color = 'red'
        }
    }else{
        pas1_1.innerHTML='×密码不能为空'
        pas1_1.style.color = 'red'
    }
}


var pas2 = document.getElementById('pas2');
var pas2_2 = document.getElementsByClassName('pas2_2')[0]
pas2.onblur =function(){
    if(pas2.value.length!=0){
        if(pas1.value==pas2.value){
            pas2_2.innerHTML='√密码正确'
            pas2_2.style.color = 'green'
        }else{
            pas2_2.innerHTML='×两次密码不同'
            pas2_2.style.color = 'red'
        }
    }else{
        pas2_2.innerHTML='×两次密码不同'
        pas2_2.style.color = 'red'
    }
}
 
var btn = document.getElementById('btn');
btn.onclick =function(){
    if(str.test(phone.value) && imga.value == 'r2b7' && yzm.value=='0728' && str2.test(user.value) && str3.test(pas1.value) && pas1.value==pas2.value){
        alert('注册成功')
        window.location.href = "../html/登录.html"
    }else{
        alert('注册失败')
    }
}
