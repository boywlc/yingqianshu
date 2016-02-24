$(function(){

 //第一屏进入动画
function firstAnimate(){
    //手机
    $(".bigIphone").velocity({translateX:'100px',translateY:'100px',opacity:0},{duration:0}).velocity({translateX:'0px',translateY:'0px',opacity:1},{duration:1000,easing:'ease',delay:500});
    //随时随地，理财快人一步
    $(".phoneTitle").velocity({translateX:'0px',translateY:'0px',opacity:0},{duration:0}).velocity({translateX:'0px',translateY:'0px',opacity:1},{duration:1000,easing:'ease',delay:2000});
    //文字
    $(".txt_name").velocity({translateX:'0px',translateY:'40px',opacity:0},{duration:0}).velocity({translateX:'0px',translateY:'0px',opacity:1},{duration:1000,easing:'ease',delay:0});
    $(".txt_describe").velocity({translateX:'0px',translateY:'40px',opacity:0},{duration:0}).velocity({translateX:'0px',translateY:'0px',opacity:1},{duration:1000,easing:'ease',delay:0});
    $(".QR_Code").velocity({translateX:'0px',translateY:'40px',opacity:0},{duration:0}).velocity({translateX:'0px',translateY:'0px',opacity:1},{duration:1000,easing:'ease',delay:0});
    $(".bnt_box").velocity({translateX:'0px',translateY:'40px',opacity:0},{duration:0}).velocity({translateX:'0px',translateY:'0px',opacity:1},{duration:1000,easing:'ease',delay:0});
    //手机内容页1
    $(".bigContent1").velocity({translateX:'100px',translateY:'-100px',opacity:0},{duration:0}).velocity({translateX:'0px',translateY:'0px',opacity:1},{duration:900,easing:'ease',delay:1000});
    //手机内容页2
    $(".bigContent2").velocity({translateX:'100px',translateY:'-100px',opacity:0},{duration:0}).velocity({translateX:'0px',translateY:'0px',opacity:1},{duration:900,easing:'ease',delay:1500});
}
//第一屏退出动画
 function firstAnimateOut(){
    //手机
   $(".bigIphone").velocity("stop").velocity({translateX:'100px',translateY:'100px',opacity:0},{duration:100})
    //随时随地，理财快人一步
    $(".phoneTitle").velocity("stop").velocity({translateX:'0px',translateY:'0px',opacity:0},{duration:100})
    //文字
    $(".txt_name").velocity("stop").velocity({translateX:'0px',translateY:'20px',opacity:0},{duration:100})
    $(".txt_describe").velocity("stop").velocity({translateX:'0px',translateY:'20px',opacity:0},{duration:100})
    $(".QR_Code").velocity("stop").velocity({translateX:'0px',translateY:'20px',opacity:0},{duration:100})
    $(".bnt_box").velocity("stop").velocity({translateX:'0px',translateY:'20px',opacity:0},{duration:100})
    //手机内容页1
    $(".bigContent1").velocity("stop").velocity({translateX:'100px',translateY:'-100px',opacity:0},{duration:100})
    //手机内容页2
    $(".bigContent2").velocity("stop").velocity({translateX:'100px',translateY:'-100px',opacity:0},{duration:0})
}
//第二屏进入动画
function secondAnimate(){
    //手and手机
     $(".phoneHand").velocity({translateX:'-200px',translateY:'200px',opacity:0},{duration:0,delay:0}).velocity({translateX:'0px',translateY:'0px',opacity:1},{duration:1000,delay:0});
    //三个圆圈
    $(".smallCircle").velocity({opacity:0},{duration:0}).velocity({opacity:1},{duration:1000,delay:300});
    $(".middleCircle").velocity({opacity:0},{duration:0}).velocity({opacity:1},{duration:1000,delay:600});
    $(".bigCircle").velocity({opacity:0},{duration:0}).velocity({opacity:1},{duration:1000,delay:900});
    //三个图文
    $(".yqs_high").velocity({opacity:0},{duration:0}).velocity({opacity:1},{duration:1000,delay:2400});
    $(".yqs_time").velocity({opacity:0},{duration:0}).velocity({opacity:1},{duration:1000,delay:1200});
    $(".yqs_low").velocity({opacity:0},{duration:0}).velocity({opacity:1},{duration:1000,delay:1800});
    //title
     $(".sevice").velocity({opacity:0},{duration:0}).velocity({opacity:1},{duration:1000,delay:2600});
}
 //第二屏退出动画
function secondAnimateOut(){
    //手and手机
     $(".phoneHand").velocity("stop").velocity({translateX:'-200px',translateY:'200px',opacity:0},{duration:0})
    //三个圆圈
    $(".smallCircle").velocity("stop").velocity({opacity:0},{duration:0})
    $(".middleCircle").velocity("stop").velocity({opacity:0},{duration:0})
    $(".bigCircle").velocity("stop").velocity({opacity:0},{duration:0})
    //三个图文
    $(".yqs_high").velocity("stop").velocity({opacity:0},{duration:0})
    $(".yqs_time").velocity("stop").velocity({opacity:0},{duration:0})
    $(".yqs_low").velocity("stop").velocity({opacity:0},{duration:0})
    //title
     $(".sevice").velocity({opacity:0},{duration:0})
}
//第三屏进入动画
function thirdAnimate(){
    //盾牌
     $(".dunpaiImg").velocity({translateX:'0px',translateY:'-200px',opacity:0},{duration:0,delay:0}).velocity({translateX:'0px',translateY:'0px',opacity:1},{duration:500,easing:'easeInCirc',delay:0});
     $(".lightCenter").velocity({translateX:'0px',translateY:'0px',opacity:0},{duration:0,delay:0}).velocity({translateX:'0px',translateY:'0px',opacity:1},{duration:100,delay:400});
     $(".lightLeft").velocity({translateX:'-200px',translateY:'0px',opacity:0},{duration:0,delay:0}).velocity({translateX:'0px',translateY:'0px',opacity:1},{duration:100,delay:400});
     $(".lightRight").velocity({translateX:'200px',translateY:'0px',opacity:0},{duration:0,delay:0}).velocity({translateX:'0px',translateY:'0px',opacity:1},{duration:100,delay:400});
     $(".lightBottom").velocity({translateX:'0px',translateY:'-200px',opacity:0},{duration:0,delay:0}).velocity({translateX:'0px',translateY:'0px',opacity:1},{duration:100,delay:400});
}
 //第三屏退出动画
function thirdAnimateOut(){
    //盾牌
     $(".dunpaiImg").velocity("stop").velocity({translateX:'0px',translateY:'-200px',opacity:0},{duration:0})
    //光
     $(".lightCenter").velocity("stop").velocity({translateX:'0px',translateY:'0px',opacity:0},{duration:0})
     $(".lightLeft").velocity("stop").velocity({translateX:'-200px',translateY:'0px',opacity:0},{duration:0})
     $(".lightRight").velocity("stop").velocity({translateX:'200px',translateY:'0px',opacity:0},{duration:0})
     $(".lightBottom").velocity("stop").velocity({translateX:'0px',translateY:'-200px',opacity:0},{duration:0})
}
//第四屏进入动画
function forthAnimate(){
   //文字
   $(".forth .title").velocity({translateX:'0px',translateY:'100px',opacity:0},{duration:0,delay:0}).velocity({translateX:'0px',translateY:'0px',opacity:1},{duration:1000,delay:0});
   $(".forth .content").velocity({translateX:'0px',translateY:'100px',opacity:0},{duration:0,delay:0}).velocity({translateX:'0px',translateY:'0px',opacity:1},{duration:1000,delay:500});
   $(".city").velocity({translateX:'0px',translateY:'200px',opacity:0},{duration:0,delay:0}).velocity({translateX:'0px',translateY:'0px',opacity:1},{duration:2000,delay:800});
   $(".logoTitle").velocity({translateX:'0px',translateY:'-200px',opacity:0},{duration:0,delay:0}).velocity({translateX:'0px',translateY:'0px',opacity:1},{duration:2000,easing:'easeInCirc',delay:800});
   
}
 //第四屏退出动画
function forthAnimateOut(){
   //文字
   $(".forth .title").velocity("stop").velocity("stop").velocity({translateX:'0px',translateY:'100px',opacity:0})
   $(".forth .content").velocity("stop").velocity("stop").velocity({translateX:'0px',translateY:'100px',opacity:0},{duration:0,delay:0})
   $(".city").velocity("stop").velocity("stop").velocity({translateX:'0px',translateY:'200px',opacity:0},{duration:0,delay:0})
   $(".logoTitle").velocity("stop").velocity("stop").velocity({translateX:'0px',translateY:'-200px',opacity:0},{duration:0,delay:0})
   
}
    $('#fullpage').fullpage(
    {
        sectionsColor :  ['#fff', '#f7f1de', '#71baed'] ,
        navigation : true,
        css3       : true,
        afterSlideLoad:function(a,b,c){
             thirdAnimate();
        },
        onSlideLeave:function(){
            thirdAnimateOut();
        },
        afterLoad:function(a,index){
            if(index == 1){
                firstAnimate();
            }
            if(index ==2){
                secondAnimate();
            }
            if(index == 3 && $(".dunpaiImg").css("opacity") == 0){
                thirdAnimate();
            }
            if(index == 4 && $(".city").css("opacity") == 0){
                forthAnimate();
            }
            if(index == 5 && $(".city").css("opacity") == 0){
                forthAnimate();
            }
        },
        onLeave    : function( index, nextIndex, direction ){
            if(index == 1){
                firstAnimateOut();
            }
            if(index== 2){
               secondAnimateOut();
            }
            if(index == 3){
                thirdAnimateOut();
            }
            if(index == 4&&nextIndex==3){
                forthAnimateOut();
            }
        }
    });
    //开启定时器
    var timer = setInterval(function(){
        $.fn.fullpage.moveSlideRight();
        },4500);

    $(".fp-next,.fp-prev").on("mouseover",function(){
        clearInterval(timer);
    })
    $(".fp-next,.fp-prev").on("mouseout",function(){
       timer = setInterval(function(){
            $.fn.fullpage.moveSlideRight();
            },4500);
    })
        

})