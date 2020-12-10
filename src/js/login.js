$('.on').on('click',function(){
    $('.pass').css('display','none')
    $('.ver').css('display','block')
})
$('.in').on('click',function(){
    $('.pass').css('display','block')
    $('.ver').css('display','none')
})

$('.end span').on('click',function(){
    location.href = 'https://muc.heytap.com/document/heytap/privacyPolicy/privacyPolicy_zh-CN.html?callback=https%3A%2F%2Fwww.heytap.com%2F'
})
$('.reg').on('click',function(){
    location.href = './registration.html'
})

$('.pass p span').on('click',function(){
    location.href = 'https://id.heytap.com/find_password.html?callback=https%3A%2F%2Fwww.heytap.com%2F'
})



let phone = $('.txt input');
let pwd = $('.pass input');
let sub = $('.btn input');
let go = $('.reg');
let arr = [false,false];

phone.blur(function(){
    let re = /^[0-9]{11}$/;
    //获取用户名
    let uname = phone.val();
    if(re.test(uname)){
        arr[0] = true;
    }else{
        alert('请输入正确的手机号码!');
        arr[0] = false;
    }
})

pwd.blur(function(){
    let re = /^\d{6}$/;
    let pass = pwd.val();
    if(re.test(pass)){
        arr[1] = true;
    }else{
        alert('请输入六位纯数字密码！');
        arr[1] = false;
    }
})

sub.click(function(){
    if(arr.indexOf(false) === -1){
        let uname = phone.val();
        let pass = pwd.val();
        let cookie_str = getCookie('registors');
        let cookie_obj = convertStrToObj(cookie_str);
        if(uname in cookie_obj){
            if(pass === cookie_obj[uname]){
                alert('登陆成功');
                location.href = '../index.html';
            }else{
                alert('密码错误');
            }
        }else{
            alert('用户名不存在');
        }
    }else{
        alert('请完善信息');
    }
})

go.click(function(){
    location.href = './registration.html';
})






function createCookie(key,value,json){
    //初始化json
    json = json || {};
    let cookie_str = encodeURIComponent(key) + '=' + encodeURIComponent(value);
    if(!isNaN(json.expires)){
        let date = new Date();
        date.setDate(date.getDate() + json.expires);
        cookie_str += ';expires=' + date;
    }
    if(json.path){
        cookie_str += ';path=' + json.path;
    }
    return cookie_str
}
function getCookie(key){
    let str = document.cookie;
    let sub = encodeURIComponent(key);
    let arr = str.split('; ');
    for(let i = 0,len = arr.length;i < len;i ++){
        let list = arr[i].split('=');
        if(list[0] === sub){
            return decodeURIComponent(list[1]);
        }
    }
    return '';
}
let convertStrToObj = function(str){
    if(!str){
        return {};
    }
    return JSON.parse(str);
}