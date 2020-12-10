//oppo专区二级菜单
$('.dh li:eq(0)').on('mouseover',function(){
    $('.box').slideDown(500,function(){
        $('.box-oppo').css('display','block');
        $('.box ul').css('display','flex');
        $('.box-yijia').css('display','none');
    })
})
//一加专区二级菜单
$('.dh li:eq(1)').on('mouseover',function(){
    $('.box').slideDown(500,function(){
        $('.box-yijia').css('display','block');
        $('.box ul').css('display','flex');
        $('.box-oppo').css('display','none');
    })
})
$('.box').on('mouseleave',function(){
    $('.box').css('display','none');
})


//首页按钮
$('.dh span').on('click',function(){
    $('.wraper').toggleClass('display',function(){});
})


let $cartDiv = $('.shp-car');
let $cartList = $('.section');
let $shp_row = $('.shp-row');

let storage = window.localStorage;
let cartStr = storage.cart ? storage.cart : '';



if(!cartStr){
    $cartDiv.css('display','block');
    $shp_row.css('display','none');
}else{
    let cartObj = convertJsonStrToJsonObj(cartStr);
    for(let id in cartObj){
        let good = cartObj[id];
        $('.img').append(`<img src="${good.src}">`);
        $('.name a').text(`${good.name}`);
        $('.price').text(`${good.price}`);
        $('.increase').append(
            `<li class="num">
                <a href="javascript:;" class="minus">-</a>
                <input type="text" name="" id="" value="${good.num}" />
                <a href="javascript:;" class="plus">+</a>
            </li>
            `);
        $('.handle').append(`<img src="../img/--.jpg" alt="">`);
        let re = /(\d+)/;
        let str = good.price;
        let num = parseInt(re.exec(str));
        $('.shp-row-bar-rt p b').text(`${good.num}` * num)
    }
}
let del = document.querySelector('.handle');
console.log(del)
del.onclick = function(){
    let ul = this.parentNode.parentNode;
    let id = this.previousElementSibling.previousElementSibling.previousElementSibling.firstChild.innerText;
    ul.remove();
    let storage = window.localStorage;
    var cartStr = storage.cart ? storage.cart : '';
    var cartObj = convertJsonStrToJsonObj(cartStr);
    delete cartObj[id];
    storage.cart = JSON.stringify(cartObj);
    let sum = document.querySelector('.shp-row-bar-rt p b');
    sum.innerText = 0;
}
let plus = document.querySelector('.plus');
plus.onclick = function(){
    let id = this.parentNode.parentNode.previousElementSibling.previousElementSibling.firstChild.innerText;
    let storage = window.localStorage;
    let cartStr = storage.cart ? storage.cart : '';
    let cartObj = convertJsonStrToJsonObj(cartStr);
    cartObj[id].num ++;
    storage.cart = JSON.stringify(cartObj);
    this.previousElementSibling.value = cartObj[id].num;
    let sum = document.querySelector('.shp-row-bar-rt p b');
    let re = /(\d+)/;
    let str = cartObj[id].price;
    let num = parseInt(re.exec(str));
    sum.innerText = '￥' + cartObj[id].num * num;
}
let minus = document.querySelector('.minus');
minus.onclick = function(){
    let id = this.parentNode.parentNode.previousElementSibling.previousElementSibling.firstChild.innerText;
    let storage = window.localStorage;
    let cartStr = storage.cart ? storage.cart : '';
    let cartObj = convertJsonStrToJsonObj(cartStr);
    if(cartObj[id].num > 1){
        cartObj[id].num --;
    }
    storage.cart = JSON.stringify(cartObj);
    this.nextElementSibling.value = cartObj[id].num;
    let sum = document.querySelector('.shp-row-bar-rt p b');
    let re = /(\d+)/;
    let str = cartObj[id].price;
    let num = parseInt(re.exec(str));
    sum.innerText = '￥' + cartObj[id].num * num;
}



function convertJsonStrToJsonObj(str){
    if(!str){
        return {};
    }
    return JSON.parse(str);
}