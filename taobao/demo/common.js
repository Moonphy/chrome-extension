const switchToPc = function() {
    const switchButton = document.getElementById('J_Quick2Static')
    if (switchButton) {
        switchButton.click()
    }
}
const setAccount = function(name, password) {
    const nameDom = document.getElementById('TPL_username_1')
    const passwordDom = document.getElementById('TPL_password_1')
    if (nameDom && passwordDom) {
        nameDom.value = name
        passwordDom.value = password
    }
}

const doLogin = function() {
    const loginButton = document.getElementById('J_SubmitStatic')
    if (loginButton) {
        loginButton.click()
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
const dropSpan = function(){
    var spanBtn = document.getElementById('nc_1_n1z');
    if(spanBtn){
        spanBtn.onmousemove();
    }
}


window.onload = function() {
    setTimeout(() => {

        const logined = document.getElementsByClassName('right-logined');
        var timer;

        if (logined.length < 1){
            timer = setTimeout(function () {

                switchToPc()
                setTimeout(function () {
                    setUserName('jiyibaba')
                },1000)

                setTimeout(function () {
                    setPassword('jyhg5180102')
                },2000)

                /*setTimeout(function () {
                    dropSpan()
                },3000)*/

                setTimeout(function () {
                    doLogin()
                },5000)
            }, 4000)
        }
        else {
            clearTimeout(timer)
        }

    }, 3000)

}