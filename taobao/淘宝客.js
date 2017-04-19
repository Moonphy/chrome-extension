/**
 * Created by Moonphy on 17/1/1.
 */
// 淘宝客登录

// var loginPanel = document.getElementsByClassName("login-panel")[0];
// userNmae.oninput = function(){ var un = userName.value; console(un)};
//var loginPanel = document.getElementsByClassName("login-panel-content")[0];
//setTimeout(function(){
//
//}, 4000);



var linkLogin = document.getElementById('J_menu_login');

linkLogin.click();

//var iframeB = document.getElementsByTagName('iframe')[0];
//var ifr_document = iframeB.contentWindow.document;
//console.log(ifr_document);
/*
iframeB.onload = function () {
    code();
};*/

var code = setTimeout(function(){

    var tarBox = document.getElementById('J_LoginBox');

    tarBox.className="login-box no-longlogin module-static";

    var userName = document.getElementById('TPL_username_1');

    userName.value = 'jiyibaba';

    var psw = document.getElementById('TPL_password_1');
    psw.value = 'jyhg5180102';


    var btnSubmit = document.getElementById('J_SubmitStatic');

    btnSubmit.click();

    var span = document.getElementById('nc_1_n1z');
    span.style.left = 210 + 'px';
}, 4000);

var divs = document.getElementsByTagName('div');
for(var i=0;i<divs.length;i++){
    divs[i].style.display = 'block';
}
var switchToPc = function() {
    var switchButton = document.getElementById('J_Quick2Static')
    if (switchButton) {
        switchButton.click()
    }
}
var setAccount = function(name, password) {
    var nameDom = document.getElementById('TPL_username_1')
    var passwordDom = document.getElementById('TPL_password_1')
    if (nameDom && passwordDom) {
        nameDom.value = name;
        passwordDom.value = password
    }
}

var setUserName = function(name) {
    var nameDom = document.getElementById('TPL_username_1')
    if (nameDom) {
        nameDom.value = name;
    }
}

var setPassword = function(password){
    var passwordDom = document.getElementById('TPL_password_1')
    if (passwordDom) {
        passwordDom.value = password
    }
}

var doLogin = function() {
    var loginButton = document.getElementById('J_SubmitStatic')
    if (loginButton) {
        loginButton.click()
    }
}
var dropSpan = function(){
    var spanBtn = document.getElementById('nc_1_n1z');
    if(spanBtn){
        spanBtn.style.left = 210 + 'px';
    }
}



window.onload = function() {
    var logined = document.getElementsByClassName('right-logined');
    if(logined && logined.length > 0){
        clearTimeout(timer)
    }
    else{
        var timer = setTimeout(function() {
            switchToPc()
            setTimeout(function () {
                setUserName('jiyibaba')
            },1000)

            // setAccount('jiyibaba', 'jyhg5180102')
            setTimeout(function () {
                setPassword('jyhg5180102')
            },2000)

            setTimeout(function () {
                dropSpan()
                doLogin()
            },3000)

        }, 3000)
    }
}
//var lis = document.getElementById('magix_vf_code').getElementsByTagName('ul')[0].getElementsByTagName('li');
//
//lis[1].click();

// 给初始Link
function setInitLink(initLink) {
    var sLink = document.getElementById('J_originUrl');
    var btnLink = sLink.nextElementSibling.getElementsByTagName('button')[0];
    if(sLink && btnLink.length > 0){
        sLink.value = initLink;
        btnLink.click();
    }
}
// 选择生成
function changeLink() {
    var btnChange = document.getElementById('magix_vf_zone').nextElementSibling.getElementsByTagName('button')[0];

    btnChange.click();
}
// 获取转化Link
function getTransformLink() {

    var links = document.getElementById('magix_vf_code').getElementsByTagName('textarea');

    var linksDate = {
        longLink : links[0].value, // 长链接
        sortLink : links[1].value, // 短链接
        taoLink : links[2].value   // 淘口令
    };

    return linksDate;
}







