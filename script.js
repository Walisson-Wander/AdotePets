
//CARROSSEL----------------
let index = 0;
let time = 20000;
function showSlide(n){
    const slides = document.querySelectorAll('.carrossel-item');
    if (n >= slides.length) index = 0;
    if (n < 0) index = slides.length -1;
    slides.forEach((slide,i)=>{
        slide.style.display = i === index ? 'block' : 'none';
    });
}
function nextSlide(){
    index++;
    showSlide(index);
}
function prevSlide(){
    index--;
    showSlide(index);
}
showSlide(index);
setInterval(nextSlide, time)


//MENU FLUTUANTE---------------

window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    const scrollButton = document.getElementById("scrollButton");
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 20) {
        scrollButton.style.display = "block"; 
    } else {
        scrollButton.style.display = "none";
    }
}

function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}