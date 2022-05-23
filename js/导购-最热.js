
var ajax = new XMLHttpRequest() || new ActiveXObject('microsoft.XMLHTTP');
ajax.open('get',"http://127.0.0.1:3000/guid/new");
ajax.send()
ajax.onreadystatechange = function (){
    if(ajax.readyState == 4){
        if (ajax.status == 200) {
            str = JSON.parse(ajax.responseText);
            // console.log(str);
            xr(str)
        }
    }
}

function xr(str){
    console.log(str);
    var list = ''
    for(var i of str){
        list+=`
        <li> 
        <p class="ul_1_p1"><img src="${i.img}"></p>
        <p class="ul_1_p2">${i.text}</p>
        <p class="ul_1_p3">
                    <span>
                        <img class="ul_1_p3_img1" src="../../img/heart.png"> ${i.like} 
                    </span>
                    <span><img src="../../img/reply.png" alt=""> ${i.words}</span>
                </p>
                <div class="ys1"></div>
                <div class="ys2"></div>
        </li>
        `
    }

    var ul_1 =document.getElementById('ul_1');
    ul_1.innerHTML = list;
}
// firstElementChild
var ul_1_p3 = document.getElementsByClassName('ul_1_p3_img1');
// console.log(ul_1_p3);

for(var i=0; i<ul_1_p3.length;i++){
    // this.setAttribute('src',"../../img/heart.png");
    ul_1_p3[i].addEventListener('click',function(){
        this.setAttribute('src',"../../img/heart_h.png");
    })
        
    }
var box1_sp1 =document.getElementById('box1_sp1');
var box1_sp2 = document.getElementById('box1_sp2');
box1_sp1.onclick =function(){
    box1_sp1.className='box1_sp'
    box1_sp2.className=''
    var ajax = new XMLHttpRequest() || new ActiveXObject('microsoft.XMLHTTP');
    ajax.open('get',"http://127.0.0.1:3000/guid/new");
    ajax.send()
    ajax.onreadystatechange = function (){
        if(ajax.readyState == 4){
            if (ajax.status == 200) {
                str = JSON.parse(ajax.responseText);
                // console.log(str);
                xr(str)
            }
        }
    }

    function xr(str){
        console.log(str);
        var list = ''
        for(var i of str){
            list+=`
            <li> 
            <p class="ul_1_p1"><img src="${i.img}"></p>
            <p class="ul_1_p2">${i.text}</p>
            <p class="ul_1_p3">
                        <span>
                            <img class="ul_1_p3_img1" src="../../img/heart.png"> ${i.like} 
                        </span>
                        <span><img src="../../img/reply.png" alt=""> ${i.words}</span>
                    </p>
                    <div class="ys1"></div>
                    <div class="ys2"></div>
            </li>
            `
        }
    
        var ul_1 =document.getElementById('ul_1');
        ul_1.innerHTML = list;
    }
    // firstElementChild
    var ul_1_p3 = document.getElementsByClassName('ul_1_p3_img1');
    // console.log(ul_1_p3);
    
    for(var i=0; i<ul_1_p3.length;i++){
        // this.setAttribute('src',"../../img/heart.png");
        ul_1_p3[i].addEventListener('click',function(){
            this.setAttribute('src',"../../img/heart_h.png");
        })
            
        }
}


box1_sp2.onclick =function(){
    box1_sp2.className='box1_sp'
    box1_sp1.className=''
    var ajax = new XMLHttpRequest() || new ActiveXObject('microsoft.XMLHTTP');
    ajax.open('get',"http://127.0.0.1:3000/guid/hot");
    ajax.send()
    ajax.onreadystatechange = function (){
        if(ajax.readyState == 4){
            if (ajax.status == 200) {
                str = JSON.parse(ajax.responseText);
                // console.log(str);
                xr(str)
            }
        }
    }

    function xr(str){
        console.log(str);
        var list = ''
        for(var i of str){
            list+=`
            <li> 
            <p class="ul_1_p1"><img src="${i.img}"></p>
            <p class="ul_1_p2">${i.text}</p>
            <p class="ul_1_p3">
                        <span>
                            <img class="ul_1_p3_img1" src="../../img/heart.png"> ${i.like} 
                        </span>
                        <span><img src="../../img/reply.png" alt=""> ${i.words}</span>
                    </p>
                    <div class="ys1"></div>
                    <div class="ys2"></div>
            </li>
            `
        }
    
        var ul_1 =document.getElementById('ul_1');
        ul_1.innerHTML = list;
    }
    // firstElementChild
    var ul_1_p3 = document.getElementsByClassName('ul_1_p3_img1');
    // console.log(ul_1_p3);
    
    for(var i=0; i<ul_1_p3.length;i++){
        // this.setAttribute('src',"../../img/heart.png");
        ul_1_p3[i].addEventListener('click',function(){
            this.setAttribute('src',"../../img/heart_h.png");
        })
            
        }

}


var box3_sp = document.getElementById('box3_sp');
var box3_sp2 =document.getElementById('box3_sp2');
// console.log(box3_sp);
box3_sp.onclick=function(){
    var box3_img=document.getElementById('box3_img');
    box3_img.setAttribute('src',"../../img/loading-icon.gif");
    box3_img.style.width=15+'px'
    box3_img.style.marginTop=5+'px'
    box3_sp2.innerHTML='正在加载中'
}