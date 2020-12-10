let phone = $('.phone');
let pwd = $('.pass');
let sure = $('.sure');
let sub = $('.reg');
let go = $('.go');
let arr = [false,false,false];


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
sure.blur(function(){
    let password = pwd.val();
    let pass = sure.val();
    if(password === pass){
        arr[2] = true;
    }else{
        alert('两次输入密码不一致');
        arr[2] = false;
    }
})
sub.click(function(){
    if(arr.indexOf(false) === -1){
        let name = phone.val();
        let mima = pwd.val();
        let cookie_str = getCookie('registors');
        let cookie_obj = convertStrToObj(cookie_str);
        if(name in cookie_obj){
            alert('用户已存在！');
        }else{
            cookie_obj[name] = mima;
            alert('注册成功！');
            console.log(createCookie('registors',JSON.stringify(cookie_obj),{path : '/'}))
            document.cookie = createCookie('registors',JSON.stringify(cookie_obj),{expires : 5,path : '/'});
        }
    }
})
go.click(function(){
    location.href='./login.html'
})








let convertStrToObj = function(str){
    if(!str){
        return {};
    }
    return JSON.parse(str);
}
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