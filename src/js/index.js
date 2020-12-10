////oppo专区二级菜单
$('.dh li:eq(0)').on('mouseover',function(){
    $('.box').slideDown(300,function(){
        $('.box-oppo').css('display','block');
        $('.box ul').css('display','flex');
        $('.box-yijia').css('display','none');
    })
})
//一加专区二级菜单
$('.dh li:eq(1)').on('mouseover',function(){
    $('.box').slideDown(300,function(){
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


//轮播
function Slider(){
    this.div = document.querySelector('#slider');
    this.ul_li = document.querySelectorAll('#slider li');
    this.num = this.ul_li.length;
    this.ol_li = this.addElements();
    this.index = 0;
    this.addEvent();
    this.slide();
    this.timer = null;
    this.autoPlayer();
}
Slider.prototype.autoPlayer = function(){
    this.timer = setInterval(()=>{
        this.index ++;
        if(this.index === this.num){
            this.index = 0;
        }
        this.slide();
    },2000);
}
Slider.prototype.slide = function(){
    for(let i = 0;i < this.num ; i ++){
        this.ul_li[i].style.display = 'none';
        this.ol_li[i].style.background = '#555d69';
    }
    this.ul_li[this.index].style.display = 'block';
    this.ol_li[this.index].style.background = 'white';
}
Slider.prototype.addEvent = function(){
    let that = this;
    for(var i = 0;i < this.num;i++){
        this.ol_li[i].index = i;
        this.ol_li[i].onclick = function(){
            that.index = this.index;
            that.slide();
        }
    }
}
Slider.prototype.addElements = function(){
    let ol = this.createElement('ol');
    let arr_li = [];
    for(let i = 0; i <this.num;i ++){
        let li = this.createElement('li');
        ol.appendChild(li);
        arr_li.push(li);
    }
    this.div.appendChild(ol);
    return arr_li;
}
Slider.prototype.createElement = function(element){
    let o_element = document.createElement(element);
    return o_element;
}
Slider.prototype.$ = function(selector){
    return document.querySelector(selector);
}
new Slider();









//oppo专区tab切换
$('.oppo-span1').mouseover(function(){
    $('.section-oppo').css('display','block');
    $('.section-oppo').css('display','flex');
    $('.section-intel').css('display','none');
})
$(('.oppo-span2')).mouseover(function(){
    $('.section-oppo').css('display','none');
    $('.section-intel').css('display','block');
    $('.section-intel').css('display','flex');
})


//yijia专区tab切换
$('.yijia-span1').mouseover(function(){
    $('.section-yijia-shouji').css('display','block');
    $('.section-yijia-shouji').css('display','flex');
    $('.section-yijia-else').css('display','none');
})
$(('.yijia-span2')).mouseover(function(){
    $('.section-yijia-shouji').css('display','none');
    $('.section-yijia-else').css('display','block');
    $('.section-yijia-else').css('display','flex');
})