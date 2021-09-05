$(document).ready(function(){
   // Navbar Shrink
   $(window).on("scroll", function(){
      if($(this).scrollTop() > 90){
         $(".navbar").addClass("navbar-shrink");
      }
      else{
         $(".navbar").removeClass("navbar-shrink");
      }
   });
   
   //Features carousel
   $('.features-carousel').owlCarousel({
      loop:true,
      margin:10,
      autoplay:true,
      responsiveClass:true,
      responsive:{
          0:{
              items:1,
          },
          600:{
              items:2,
          },
          1000:{
              items:3,
          }
      }
  });
    //App screenshot carousel
    $('.app-screenshot-carousel').owlCarousel({
      loop:true,
      margin:10,
      autoplay:true,
      responsiveClass:true,
      responsive:{
          0:{
              items:1,
          },
          600:{
              items:1,
          },
          1000:{
              items:3,
          }
      }
  });



//Team carousel
  $('.team-carousel').owlCarousel({
        loop:true,
        margin:10,
        autoplay:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:2,
            },
            600:{
                items:2,
            },
            1000:{
                items:3,
            }
        }
    });
    //scroll it call
    $.scrollIt({
        topOffset: -50
    });

//---------Navbar-----------
$(".nav-link").on("click", function(){
    $(".navbar-collapse").collapse("hide");
});

});


//video popup
document.getElementById('btn-play').addEventListener('click', function(){
   document.getElementById('video-popup').style.visibility = "visible";
   document.getElementById('video-popup').style.opacity = "1";
})

document.getElementById('close').addEventListener('click', function(){
    document.getElementById('video-popup').style.visibility = "hidden";
    document.getElementById('video-popup').style.opacity = "0";
 })
