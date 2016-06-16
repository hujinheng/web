(function($){

  var qcloud={};
  $('[_t_nav]').hover(
    function(){
      var _nav = $(this).attr('_t_nav');
      clearTimeout( qcloud[ _nav + '_timer' ] );
      qcloud[ _nav + '_timer' ] = setTimeout(function(){
      $('[_t_nav]').each(function(){
      $(this)[ _nav == $(this).attr('_t_nav') ? 'addClass':'removeClass' ]('nav-up-selected');
      });
      $('#'+_nav).stop(true,true).slideDown(200);
      }, 150);
    },
    function(){
    var _nav = $(this).attr('_t_nav');
    clearTimeout( qcloud[ _nav + '_timer' ] );
    qcloud[ _nav + '_timer' ] = setTimeout(function(){
    $('[_t_nav]').removeClass('nav-up-selected');
    $('#'+_nav).stop(true,true).slideUp(200);
    }, 150);
  });

 

  $("#btnAlert").click(function () {
     $.DialogBySHF.Alert({ Width: 350, Height: 200, Title: "HTML5资源教程", Content: '你好，这是弹出提示，即JS中的alert', ConfirmFun: test });
  });
  $("#btnConfirm").click(function () {
      $.DialogBySHF.Confirm({ Width: 350, Height: 200, Title: "提示信息", Content: '你好，这是确认信息，类似于JS中的confirm', ConfirmFun: test, CancelFun: testCancel });
  });
  $("#btnDialog").click(function () {
      $.DialogBySHF.Dialog({ Width: 1024, Height: 500, Title: "HTML5资源教程", URL: 'http://www.html5tricks.com' });
  });


  //////////////////////////////////////轮播图//////////////////////////////////////
   var i=0;
   var timer;
   $(".ig").eq(i).show().siblings().hide();
   Time();
   $(".tab").hover(
      function(){//浮标移上去后
          clearInterval(timer);
          i = $(this).index();
          show();
      },
      function(){//浮标移出去后
          Time();
      }
   );
   $(".igbtn").hover(
      function(){//浮标移上去后
          clearInterval(timer);
      },
      function(){//浮标移出去后
          Time();
      }
    )
   
   $(".igbtn1").click(function(){
        i--;
        if (i == -1) {
          i = 4;
        }
        show();
   });
   $(".igbtn2").click(function(){
        i++;
        if (i == 5) {
          i = 0;
        }
        show();
   });


var slider = new osSlider({ //开始创建效果
    pNode:'.slider', //容器的选择器 必填
    cNode:'.slider-main li', //轮播体的选择器 必填
    speed:3000, //速度 默认3000 可不填写
    autoPlay:true //是否自动播放 默认true 可不填写
  });


 //function
function show(){
  $(".ig").eq(i).fadeIn(300).siblings().fadeOut(300);
  $(".tab").eq(i).addClass("curbg").siblings().removeClass('curbg');
}
function Time(){
  timer = setInterval(function(){
        i++;
        if (i==5) {
          i=0;
        }
        show();
      },
      3000
    );
}
function test() {
    $.DialogBySHF.Alert({ Width: 350, Height: 200, Title: "确认后执行方法", Content: '确认后执行的方法' });
}
function testCancel() {
    $.DialogBySHF.Alert({ Width: 350, Height: 200, Title: "取消后执行方法", Content: '取消后执行的方法' });
}


  

})(jQuery);



