$(document).ready(function() { 

// LinkedIn Button
$('.btn-1').click(function(e){
      e.preventDefault();
      window.open('https://www.linkedin.com/in/camiloordonezj');
}); 

// Display APPS
$('#apps').click(function(e){
      $('.apps-row, .app-heading').fadeIn(500);
      $('.ppt-row, .ppt-heading, .resume-heading, .resume-img').fadeOut(100);
      $('html, body').animate({
         scrollTop: ($('.base').offset().top)
      },500);
}); 

// Display PPT
$('#ppt').click(function(e){

      $('.ppt-row, .ppt-heading').fadeIn(500);
      $('.apps-row, .app-heading,.resume-heading, .resume-img').fadeOut(100);
      $('html, body').animate({
         scrollTop: ($('.base').offset().top)
      },500);
}); 

// Display Resume
$('#about').click(function(e){
      $('.resume-heading, .resume-img').fadeIn(500);
      $('.ppt-row, .ppt-heading, .apps-row, .app-heading').fadeOut(100);
      $('html, body').animate({
         scrollTop: ($('.base').offset().top)
      },500);
}); 

// Apps Buttons
$('#food-app-btn').click(function(e){
      e.preventDefault();
      window.open('https://www.youtube.com/watch?v=S0p8hw1VYGk');
   }); 

$('#one-app-btn').click(function(e){
   e.preventDefault();
   window.open('http://calm-sea-3644.herokuapp.com/');
});   

$('#game-app-btn').click(function(e){
   e.preventDefault();
   window.open('https://floating-gorge-3958.herokuapp.com/');
});  


$('.app2, .app4, .app6, .ppt-row, .ppt-heading, .resume-heading, .resume-img' ).fadeOut(0);

// To be debugged   
$('.app1').on('mouseenter',function(e){
   $('.app2').fadeIn(500);
});  

$('.app1').on('mouseleave',function(e){
   $('.app2').fadeOut(100);
});  

$('.app3').on('mouseenter',function(e){
   $('.app4').fadeIn(500);
});  

$('.app3').on('mouseleave',function(e){
   $('.app4').fadeOut(100);
});  


$('.app5').on('mouseenter',function(e){
   $('.app6').fadeIn(500);
});  

$('.app5').on('mouseleave',function(e){
   $('.app6').fadeOut(100);
});  


// ppt - To be debugged

$('.ppt2, .ppt4, .ppt6').fadeOut(0);

   
$('.ppt1').on('mouseenter',function(e){
   $('.ppt2').fadeIn(500);
});  

$('.ppt1').on('mouseleave',function(e){
   $('.ppt2').fadeOut(100);
});  

$('.ppt3').on('mouseenter',function(e){
   $('.ppt4').fadeIn(500);
});  

$('.ppt3').on('mouseleave',function(e){
   $('.ppt4').fadeOut(100);
});  


$('.ppt5').on('mouseenter',function(e){
   $('.ppt6').fadeIn(500);
});  

$('.ppt5').on('mouseleave',function(e){
   $('.ppt6').fadeOut(100);
});  






 });