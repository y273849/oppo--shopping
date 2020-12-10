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



//购物车按钮
$('.cart').click(function(){
    location.href = './cart.html'
    //商品名称
    let $name = $('.product-name').text();
    //商品缩略图
    let $src = $('.bottom ul li').eq(0).find('img').attr('src');
    //单个商品的价格
    let $price = $('.data-price').text();
    //初始商品数量
    let $value = $('#2').val();

    
    //获取localstorage
    let storage = window.localStorage;
    let cartStr = storage.cart ? storage.cart : '';
    let cartObj = convertJsonStrToJsonObj(cartStr);


    if($name in cartObj){
        cartObj[$name].num ++;
    }else{
        cartObj[$name] = {
            "name" : $name,
            "price" : $price,
            "src" : $src,
            "num" : $value
        }
    }
    storage.cart = JSON.stringify(cartObj);
})




function convertJsonStrToJsonObj(str){
    if(!str){
        return {};
    }
    return JSON.parse(str);
}