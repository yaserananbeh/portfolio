"use strict";

/** distinguish the pages using the body id */
const darkLightBtn = document.getElementsByClassName("lightDarkBtn")[0];
if (localStorage.getItem("lightOrDark")) {
  darkLightBtn.classList.add(localStorage.getItem("lightOrDark"));
} else {
  darkLightBtn.classList.add("dark");
}

let page = document.body.id;
switch (page) {
  case "indexPage":
    indexPageFunc();
    burgerMenuFunc();
    lightDarkModeFunc();
    break;
  case "projectsPage":
    burgerMenuFunc();
    lightDarkModeFunc();
    break;
  case "contactPage":
    burgerMenuFunc();
    lightDarkModeFunc();
    contactSubmitFormFunc();
    break;

  default:
    console.log("not recognized page");
    break;
}

function indexPageFunc() {
  /******************************************** */
  /*******testimonial section functionality******************** */
  let firstCircle = document.getElementsByClassName("firstCircle")[0];
  let secondCircle = document.getElementsByClassName("secondCircle")[0];
  let ThirdCircle = document.getElementsByClassName("ThirdCircle")[0];
  let testimonial1 = document.getElementsByClassName("testimonial")[0];
  let testimonial2 = document.getElementsByClassName("testimonial")[1];
  let testimonial3 = document.getElementsByClassName("testimonial")[2];
  let testimonialsContainer = document.getElementsByClassName(
    "testimonialsContainer"
  )[0];

  firstCircle.addEventListener("click", () => {
    testimonialsContainer.className = "testimonialsContainer show";
    firstCircle.style.color = "teal";
    secondCircle.style.color = "black";
    ThirdCircle.style.color = "black";
    testimonial1.className = "testimonial testimonial1 active";
    testimonial2.className = "testimonial testimonial2";
    testimonial3.className = "testimonial testimonial3";
  });
  secondCircle.addEventListener("click", () => {
    firstCircle.style.color = "black";
    secondCircle.style.color = "teal";
    ThirdCircle.style.color = "black";
    testimonial1.className = "testimonial testimonial1";
    testimonial2.className = "testimonial testimonial2  active";
    testimonial3.className = "testimonial testimonial3";
  });
  ThirdCircle.addEventListener("click", () => {
    firstCircle.style.color = "black";
    secondCircle.style.color = "black";
    ThirdCircle.style.color = "teal";
    testimonial1.className = "testimonial testimonial1";
    testimonial2.className = "testimonial testimonial2";
    testimonial3.className = "testimonial testimonial3 active";
  });
}
function burgerMenuFunc() {
  /****************************************** */
  /************* Burger Menu ************** */
  /****************************************** */
  const toggleButton = document.getElementById("burgerMenu");
  const header = document.getElementsByTagName("header")[0];
  const navbarLinks = document.getElementsByClassName("navbar-links")[0];
  const navbarLinks1 = document.getElementsByClassName("navbar-links")[1];

  header.addEventListener("click", () => {
    navbarLinks.classList.toggle("active");
    navbarLinks1.classList.toggle("active");
  });
}
/****************************************** */
/************* Light\Dark toggle ************** */
/****************************************** */
function lightDarkModeFunc() {
  const darkLightBtn = document.getElementsByClassName("lightDarkBtn")[0];

  const lightCssLink = document.getElementById("lightCssLink");
  const navLogo = document.getElementById("navLogo");
  if (page == "indexPage") {
    darkLightBtn.addEventListener("click", toggleMode);
    function toggleMode() {
      if (darkLightBtn.classList == "lightDarkBtn light") {
        localStorage.setItem("lightOrDark", "light");
        lightCssLink.href = "./css/light.css";
        navLogo.src = "./assets/images/Mylogo.png";
        darkLightBtn.style.transform = "scaleX(-1)";
        darkLightBtn.style.color = "#00c2cb";
        darkLightBtn.classList = "lightDarkBtn dark";
      } else {
        localStorage.setItem("lightOrDark", "dark");

        lightCssLink.href = "./css/style.css";
        navLogo.src = "./assets/images/mylogofinal.png";
        darkLightBtn.style.transform = "scaleX(1)";
        darkLightBtn.style.color = "white";
        darkLightBtn.classList = "lightDarkBtn light";
      }
    }
    toggleMode();
  } else {
    darkLightBtn.addEventListener("click", toggleMode);
    function toggleMode() {
      if (darkLightBtn.classList == "lightDarkBtn light") {
        localStorage.setItem("lightOrDark", "light");

        lightCssLink.href = "../css/light.css";
        navLogo.src = "../assets/images/Mylogo.png";
        darkLightBtn.style.transform = "scaleX(-1)";
        darkLightBtn.style.color = "#00c2cb";
        darkLightBtn.classList = "lightDarkBtn dark";
      } else {
        localStorage.setItem("lightOrDark", "dark");

        lightCssLink.href = "../css/style.css";
        navLogo.src = "../assets/images/mylogofinal.png";
        darkLightBtn.style.transform = "scaleX(1)";
        darkLightBtn.style.color = "white";
        darkLightBtn.classList = "lightDarkBtn light";
      }
    }
    toggleMode();
  }
}
function contactSubmitFormFunc(){
  let contactArray=[];
let previousData=JSON.parse(localStorage.getItem("contactUsFormData"))
  if (previousData) {
    // console.log('there"s previous data');
    previousData.forEach(element => {
      contactArray.push(element)
    });
    contactArray.push(previousData)
  }
  class Form{
    constructor(name,email,message){
      this.name=name;
      this.email=email;
      this.message=message
    }
  }
  let form=document.querySelector(".contactFormContainer form")

  form.addEventListener("submit",formSubmit)
  function formSubmit(e){
    e.preventDefault();
    let name=e.target.name.value;
    let email=e.target.email.value;
    let message=e.target.message.value;

    let newFormData=new Form(name,email,message);
    contactArray.push(newFormData)
    localStorage.setItem("contactUsFormData",JSON.stringify(contactArray))
    form.reset();
  }
}