"use strict";
let firstCircle=document.getElementsByClassName("firstCircle")[0];
let secondCircle=document.getElementsByClassName("secondCircle")[0];
let ThirdCircle=document.getElementsByClassName("ThirdCircle")[0];
let testimonial1=document.getElementsByClassName('testimonial')[0];
let testimonial2=document.getElementsByClassName('testimonial')[1];
let testimonial3=document.getElementsByClassName('testimonial')[2];
let testimonialsContainer=document.getElementsByClassName('testimonialsContainer')[0];

firstCircle.addEventListener("click" ,()=>{
    testimonialsContainer.className="testimonialsContainer show";
    firstCircle.style.color="teal";
    secondCircle.style.color="black";
    ThirdCircle.style.color="black";
    testimonial1.className="testimonial testimonial1 active";
    testimonial2.className="testimonial testimonial2";
    testimonial3.className="testimonial testimonial3";

})
secondCircle.addEventListener("click" ,()=>{
    firstCircle.style.color="black";
    secondCircle.style.color="teal";
    ThirdCircle.style.color="black";
    testimonial1.className="testimonial testimonial1";
    testimonial2.className="testimonial testimonial2  active";
    testimonial3.className="testimonial testimonial3";

})
ThirdCircle.addEventListener("click" ,()=>{
    firstCircle.style.color="black";
    secondCircle.style.color="black";
    ThirdCircle.style.color="teal";
    testimonial1.className="testimonial testimonial1";
    testimonial2.className="testimonial testimonial2";
    testimonial3.className="testimonial testimonial3 active";

})