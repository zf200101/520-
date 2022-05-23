
function ajax_() {
    var ajax_ = new XMLHttpRequest();
    ajax_.open('get', 'http://127.0.0.1:3000/play/hot');
    ajax_.send();
    ajax_.onreadystatechange = function () {
        if (ajax_.readyState == 4) {
            if (ajax_.status == 200) {
                console.log(ajax_.responseText);
                var date = JSON.parse(ajax_.responseText)
                aj(date)
            }
        }
    }
}
function aj(arry) {
    var str = '';
    for (var item of arry) {
        for (var atem of item) {
            str += `
            <li ><img src="${atem.img}">
            <div class="tu">
                <p>
                    ${atem.text}<br>
                    <span>${atem.description}</span>
                </p>
            </div>
            <span>${atem.price}</span>
            <div class="rs">
                <span class="xin">${atem.like}</span>
                <span class="look">${atem.words}</span>
            </div>
        </li>
            `
        }

    }
    var zuire_ = document.getElementsByClassName('zuire')[0];
    zuire_.innerHTML = str
    atem.img.onclick = function () {
        window.location.href = '../shiyong/试用-产品.html'
    }
}


var a_ = document.getElementsByClassName('jx')[0];
a_.onclick = function () {

    a_.className = 'jx jc'
    a_.innerHTML = '正在加载中'

}



