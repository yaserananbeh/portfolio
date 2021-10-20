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
/****************************************** */
/************* Burger Menu ************** */
/****************************************** */
const toggleButton = document.getElementById('burgerMenu')
const header=document.getElementsByTagName('header')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]
const navbarLinks1 = document.getElementsByClassName('navbar-links')[1]

// console.log(toggleButton)

header.addEventListener('click', () => {
    // console.log(toggleButton);
    // console.log("Yaser");
    navbarLinks.classList.toggle('active')
    navbarLinks1.classList.toggle('active')
})

/****************************************** */
/************* Light\Dark toggle ************** */
/****************************************** */
const darkLightBtn=document.getElementsByClassName("lightDarkBtn")[0]
const lightCssLink=document.getElementById("lightCssLink")
const navLogo=document.getElementById("navLogo")
darkLightBtn.addEventListener("click",function(){
    if(darkLightBtn.innerHTML=="light"){
        lightCssLink.href="./css/light.css"
        navLogo.src="./assets/images/Mylogo.png"
        darkLightBtn.innerHTML="dark";
        
    }
    else{
        lightCssLink.href="./css/style.css"
        navLogo.src="./assets/images/mylogofinal.png"
        darkLightBtn.innerHTML="light";
    }
})