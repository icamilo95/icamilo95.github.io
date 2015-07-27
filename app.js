$(document).ready(function() { 

// LinkedIn Button
$('.btn-1, #link').click(function(e){
      e.preventDefault();
      window.open('https://www.linkedin.com/in/camiloordonezj');
}); 


// Resume Button
$('#about').click(function(e){
      e.preventDefault();
      window.open('img/Camilo Ordonez1.pdf');
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

// Scroll UP
$('#app-goup').click(function(e){
      $('html, body').animate({
         scrollTop: ($('.container').offset().top)
      },1000);
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


$('.ppt-row, .ppt-heading, .apps-row, .app-heading').fadeOut(0);




 });