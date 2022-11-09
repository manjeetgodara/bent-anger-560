


//auto-slide
var slideIndex=0;
showSlides();
function showSlides(){
    var i;
    var slides=document.getElementsByClassName("mySlide");
    for(i=0;i<=slides.length-1;i++){
        slides[i].style.display="none";
    }
    slideIndex++;
    if(slideIndex>slides.length){
        slideIndex=1;
    }
    slides[slideIndex-1].style.display="block";
    setTimeout(showSlides,8000);
}