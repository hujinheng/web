//预处理 相当于$(document).ready(function(){...});
///<reference path="_references.js">
(function($){
   $(".btn1").click(function(){
      $("p").show();//所有标签为p的元素
      $("#p1").hide();//id为p1的元素
      // $(this).hide();//当前的HTML元素 这里指button本身 
      $(".cl").hide();//class为cl的元素
      $(".img1").fadeTo("fast",1);
      $(".img2").fadeTo("fast",1);
      $(".img3").fadeTo("fast",1);
   });
   $(".btn2").click(function(){
      $(".img1").show();
      $(".img2").hide();
      $(".img3").hide();
   });
   $(".btn3").click(function(){
      $(".img1").fadeOut(3000);
      $(".img2").fadeIn("slow");
      $(".img3").fadeIn(3000);
   });
   $(".btn4").click(function(){
      $(".img1").fadeToggle();
      $(".img2").fadeToggle("slow");
      $(".img3").fadeToggle(3000);
   });
   $(".btn5").click(function(){
      $(".img1").fadeTo("fast",0.3);
      $(".img2").fadeTo("slow",0.2);
      $(".img3").fadeTo("slow",0.5);
   });
   $(".btn6").click(function(){
      layer.alert("layer弹出层",{
          icon:5
      });
   })
   var change = true;
   $(".flip").click(function(){
      $(".panel").slideToggle("slow");
      change = !change;
      if (change) {
        $(this).text("打开");
      }
      else{
        $(this).text("关闭");
      }
   });

   // $.fn.extend({
   //      animateCss: function (animationName) {
   //          var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
   //          $(this).addClass('animated ' + animationName).one(animationEnd, function() {
   //              $(this).removeClass('animated ' + animationName);
   //          });
   //      }
   //  });

   //var animatename = "flash";
   //$(".btn6").click(function(){
        // $('.ani').animateCss('hinge');//方法一: 此句配合$.fn.extend
        //$('.ani').addClass('animated '+animatename);//方法二:此句配合下面那句
        //$(".flip").text("关闭");
        // setTimeout(function(){
        //     $('.ani').removeClass('animated '+animatename);                      
        // },1000);

        
   // });
   //配合方法二
   // var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
   // $('.ani').one(animationEnd, function() {
   //             $(this).removeClass('animated '+animatename);
   //              alert("一次");
   //          });

   $('button').click(function(){
        var className = $(this).text();
        //alert(className);
        $('.ani').addClass("animated "+className);
        setTimeout(function(){
            $('.ani').removeClass("animated "+className);                      
        },1000);
    });

   $(".btn7").click(function(){
      $(".flash").animate({left:'200px'},5000).animate({fontSize:'3em'},5000);
   });
   $(".btn8").click(function(){
      $('.flash').stop();
   });
   $(".btn9").click(function(){
      $('.flash').stop(true);
   });
   $(".btn10").click(function(){
      $('.flash').stop(true,true);
   });
   $(".btn11").click(function(){
     $("span").parents("div").css({"color":"red","border":"2px solid blue"});

   });
   $(".btn12").click(function(){
      $("span").parents("ul").css({"color":"red","border":"2px solid red"});

   });
   $(".btn13").click(function(){
     $("span").parents("li").css({"color":"red","border":"2px solid maroon"});
   });
   $(".btn14").click(function(){
     $("span").parentsUntil("div").css({"color":"red","border":"2px solid maroon"});
   });
   $(".btn15").click(function(){
     $(".dd").children().css({"color":"red","border":"2px solid maroon"});
   });
   $(".btn16").click(function(){
     $(".dd").children(".u1").css({"color":"red","border":"2px solid maroon"});
   });
   $(".btn17").click(function(){
     $(".dd").find("span").css({"color":"red","border":"2px solid maroon"});
   });
   $(".btn18").click(function(){
     $("ul").siblings().css({"color":"red","border":"2px solid maroon"});
   });
   var data = {aa:"123",bb:"321"};
    $(".btn19").click(function(){
      //多事件传参
      $(".img1").on("mouseleave mousedown",data,
          function(e){
              if (e.type=="mouseleave") {
                  alert("event = "+e.data.aa);
              }
              else if (e.type=="mousedown") {
                  alert("event = "+e.data.bb);
              }
              
          }
      );

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

//////////////////////////////////////手风琴图片切换效果//////////////////////////////////////
$(".pic ul li").mouseover(function(){//mouseover泛指鼠标放在哪里pic上
    $(this).stop(true).animate({width:"800px"},500).siblings().stop(true).animate({width:"100px"},500);
});

//////////////////////////////////////飘雪效果//////////////////////////////////////
var minSize = 20;
var maxSize = 70;
var newOn = 200;//每隔X毫秒产生一个雪片
var flakeColor = "#fff";
// var flake = $("<div></div>").css({"position":"absolute","top":"-50px"}).html("*");
var flake = $("<div></div>").css({"position":"absolute","top":"-340px"}).html("<img src='img/100.jpg' style='width:100px;' />");
var documentHeight = $(document).height();
var documentWidth = $(document).width();

    setInterval(function(){
        var startPostionLeft = Math.random()*documentWidth;//初始距离左边距离
        var startOpacity = Math.random()*0.3 + 0.7;//初始透明度
        var endPositionTop = documentHeight;//结束距离浏览器上边距离
        var endPositionLeft = Math.random()*documentWidth;//结束距离浏览器左边距离
        var durationFall = 2000 + Math.random()*3000;//间隔时间
        var sizeFlake = minSize+Math.random()*maxSize;//雪片大小
        flake.clone().appendTo("body").css({
          "left":startPostionLeft,
          "opacity":startOpacity,
          "font-size":sizeFlake,
          "color":flakeColor
        }).animate({
            "top":endPositionTop,
            "left":endPositionLeft,
            "opacity":0.5
        },durationFall,
          function(){$(this).remove();}//在运行完animate后执行
          );
    },newOn);
//////////////////////////////////////菜单三级联动//////////////////////////////////////
var iNum1;
var iNum2;
var aProvince = ["河北省","山西省","湖北省"];
aProvince.length
for (var i = 0; i<aProvince.length; i++) {
   $('#selProvince').append("<option>"+aProvince[i]+"</option>");
}
var aCity=[["石家庄","张家口"],["太原市","大同市","阳泉市"],["武汉市","孝感市","宜昌市"]];
$("#selProvince").change(function(){
	$("#selCity").children().not(":eq(0)").remove();
	iNum1 = $(this).children("option:selected").index();//option:selected被选中的子元素
	var aaCity = aCity[iNum1-1];
	for (var i = 0; i<aaCity.length; i++) {
	   $('#selCity').append("<option>"+aaCity[i]+"</option>");
	}
});

var aCity=[["石家庄","张家口"],["太原市","大同市","阳泉市"],["武汉市","孝感市","宜昌市"]];
$("#selProvince").change(function(){
	$("#selCountry").children().not(":eq(0)").remove();
	$("#selCity").children().not(":eq(0)").remove();
	iNum1 = $(this).children("option:selected").index();//option:selected被选中的子元素
	var aaCity = aCity[iNum1-1];
	for (var i = 0; i<aaCity.length; i++) {
	   $('#selCity').append("<option>"+aaCity[i]+"</option>");
	}
});

var aCountry=[[["无极县","赵县"],["尚义县","阳原县"],["平泉","隆化"],["抚宁","卢龙"]],
[["清徐","阳曲"],["山阴","应县"],["左云","天镇"]],
[["武昌","洪山"],["云梦县","大悟县"]]];
$("#selCity").change(function(){
	$("#selCountry").children().not(":eq(0)").remove();
	iNum2 = $(this).children("option:selected").index();//option:selected被选中的子元素
	var aaCountry = aCountry[iNum1-1][iNum2-1];
	for (var i = 0; i<aaCountry.length; i++) {
	   $('#selCountry').append("<option>"+aaCountry[i]+"</option>");
	}
});


})(jQuery);

