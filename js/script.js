$(function(){
  $(window).scroll(function() {
    if ($(document).scrollTop() > 100) {
        $('.sticky-top').addClass('transp');
        } else {
              $('.sticky-top').removeClass('transp');     
                   }
});
    $('.hov').click(function(){
        $(this).preventDefault();
        
       
    });
   
  });
function myFunction() {
    
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = " more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = " less"; 
    moreText.style.display = "inline";
  }
}