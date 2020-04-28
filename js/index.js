$(".num").counterUp({delay:10,time:2000});

$(function(){
        "use strict";
   $(window).on("scroll",function(){
     var sc = $(window).scrollTop();
       if(sc > 350){
           $(".up").fadeIn();
       } else {
          $(".up").fadeOut();
       }
   });
});
$(document).ready(function() {
    "use strict";
   $(".up").click(function () {
 $('html, body').animate({scrollTop:0});
   });
});


$(function(){
   'use strict';
    
$('.list li a').click(function(){
    
    $('.list a').removeClass('active');
    $(this).addClass('active');
    
   }); 
   }); 
    


$(function(){
   'use strict';
    
$('.color-circle').click(function(){
    
    $('.color-circle').removeClass('active1');
    $(this).addClass('active1');
    
   }); 
   }); 


    
$('.categories h2').click(function(){
    
    $('.categories h2').removeClass('active');
    $(this).addClass('active');
    
   }); 
 

$(".show-dinner").click(function(){
    $('.breakfast').hide();
    $('.dessert').hide();
    $('.dinner').show();
    
});
$(".show-breakfast").click(function(){
    $('.dinner').hide();
    $('.dessert').hide();
    $('.breakfast').show();
 
});
$(".show-dessert").click(function(){
    $('.breakfast').hide();
    $('.dinner').hide();
    $('.dessert').show().animate();
    
});


$(document).ready(function() {
    "use strict";
    
      $(".main").tiltedpage_scroll({
    sectionContainer: "> section",     // In case you don't want to use <section> tag, you can define your won CSS selector here
    angle: 10,                         // You can define the angle of the tilted section here. Change this to false if you want to disable the                                      tilted effect. The default value is 50 degrees.
    opacity: true,                     // You can toggle the opacity effect with this option. The default value is true
    scale: true,                       // You can toggle the scaling effect here as well. The default value is true.
    outAnimation: true                 // In case you do not want the out animation, you can toggle this to false. The defaul value is true.
  });
       }); 

$(function(){
    'use strict';
    
$('.list li a').click(function(Event){
    
      Event.preventDefault();
     $('html, body').animate({
         
         scrollTop: $('#'+ $(this).data('scroll')).offset().top-74},1000);
     });
    
    
});



$(window).scroll(function(){
    $('.scrolling').each(function(){
        
        if ($(window).scrollTop()  > $(this).offset().top -100){
            
            var IDscrolling=$(this).attr('id');
            
            $('.list a').removeClass('active');
            $('.list a[data-scroll="'+IDscrolling+'"]').addClass('active');
            
            
        }
        
    });

    
    
    
});


$('.reserve').click(function(){
  $('.popup').fadeIn();
    
    
    
});
 $('.popup').click(function(){
     
     
      $(this).fadeOut();
 });


$(".color-circle").on('click',function(){
    $('body').attr('data-choose-color',$(this).data('color')); 
    
    
     
});