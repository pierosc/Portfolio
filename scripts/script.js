

//COVER

const topmenu = document.getElementById("top-nav-menu");
const topoptions = document.getElementById("top-nav-options");
var navstatus = 0;

topmenu.addEventListener("click", () =>{
  if (navstatus ==0 ){
  topoptions.style.display = "flex";
  setTimeout(() => {
    topoptions.style.transform = "scaleY(1)";
  }, 50); 
  navstatus=1;
  }
  else{
    topoptions.style.transform = "scaleY(0)";
    setTimeout(() => {
      topoptions.style.display = "none";
    }, 100);
    navstatus = 0;
  }
})
//COVER TYPING
var typed = new Typed(".typing", {
  strings: ["Programmer", "Mechatronic", "Developer","Musician", "Techies player"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true
});

//HEADER NAV//
const about = document.getElementById("aboutme");
const project = document.getElementById("project");
const certificates = document.getElementById("certificate");
const social = document.getElementById("social");
//sections
const aboutsection = document.getElementById("nombre");
const projectsection = document.getElementById("projects");
const certificatesection = document.getElementById("cert-title");
const socialsection = document.getElementById("footer");

about.addEventListener("click", () =>{
  let scrollpos = document.documentElement.scrollTop;
  var inicioabout = scrollpos + aboutsection.getBoundingClientRect().top - 69;
  scroll(0,inicioabout);
});

project.addEventListener("click", () =>{
  let scrollpos = document.documentElement.scrollTop;
  var inicioproject = scrollpos + projectsection.getBoundingClientRect().top - 69;
  scroll(0,inicioproject);
});

certificates.addEventListener("click", () =>{
  let scrollpos = document.documentElement.scrollTop;
  var iniciocertificate = scrollpos + certificatesection.getBoundingClientRect().top - 69;
  scroll(0,iniciocertificate);

});  

social.addEventListener("click", () =>{
  let scrollpos = document.documentElement.scrollTop;
  var iniciosocial = scrollpos + socialsection.getBoundingClientRect().top - 69;
  scroll(0, iniciosocial);
});







//PROJECT GALLERY MENU//

var cont = document.querySelector(".img-cont");
var cont2 = document.querySelector(".img-cont2");
var web = document.getElementById("web-box");
var print = document.getElementById("3d-box");
var allmenu = document.querySelector(".project-menu .icon-box");

web.addEventListener("click", () =>{

  cont2.style.transform = "scale(0)";
  setTimeout(() => {
    cont2.style.display = "none";
  }, 400);
  setTimeout(() => {
  cont.style.display = "flex";
  }, 400);
  setTimeout(() => {
    cont.style.transform = "scale(1)";
  }, 500); 

  console.log('clicked');
  web.className= "pro-active";
  print.className= "pro";
  
  console.log(web);
  console.log(print);

})

print.addEventListener("click", () =>{

  cont.style.transform = "scale(0)";
  setTimeout(() => {
    cont.style.display = "none";
  }, 400);
  setTimeout(() => {
  cont2.style.display = "flex";
}, 400);
  setTimeout(() => {
    cont2.style.transform = "scale(1)";
  }, 500); 
 

  web.className= "pro";
  print.className= "pro-active"; 
  console.log(web);
  console.log(print);
})

//CERTIFICATES
VanillaTilt.init(document.querySelectorAll(".cert-img .img-box"), {
  max: 25,
  speed: 400
});


//ASIDE NAV ANIMATIONS//
window.onscroll = () => {
    let scroll = document.documentElement.scrollTop;
    if (scroll > 500) {
      document.getElementById("dropdwn").style.transform = "scale(1)";
      
      //console.log(scrollY);
    } else {
      document.getElementById("dropdwn").style.transform = "scale(0)";
    };
    
    //NAVTOP
    let inicioabout = scroll + aboutsection.getBoundingClientRect().top - 70;
    let inicioproject = scroll + projectsection.getBoundingClientRect().top - 70;
    let iniciocertificate = scroll + certificatesection.getBoundingClientRect().top - 70;
    let iniciosocial = scroll + socialsection.getBoundingClientRect().top - 70;

    if (scroll>=inicioabout && scroll< inicioproject){
      console.log("estoy en about");
      about.className="nav_active";
      project.className="nav";
      certificates.className="nav";
      social.className="nav";
    };
    if (scroll>=inicioproject && scroll< iniciocertificate){
      console.log("estoy en proyectos");
      about.className="nav";
      project.className="nav_active";
      certificates.className="nav";
      social.className="nav";
    };
    if (scroll>=iniciocertificate && scroll< iniciosocial){
      console.log("estoy en proyectos");
      about.className="nav";
      project.className="nav";
      certificates.className="nav_active";
      social.className="nav";
    };



};
//Aparición de las opciones//
const navspan = document.getElementById("span");
const navicon = document.getElementById("drop-icon");
const drpbtn = document.querySelector(".dropbtn");
let asidenavstatus = 0;

drpbtn.addEventListener("click", () => {
  if(asidenavstatus == 0){
  navspan.style.transform = "scaleY(1)";
  navicon.style.transform = "rotate(135deg)";
  drpbtn.style.animation = "corner 0.15s normal both";
  asidenavstatus =1;
  }
  else {
    navspan.style.transform = "scaleY(0)";
    navicon.style.transform = "rotate(0deg)";
    drpbtn.style.animation = "corner-reverse 0.15s normal 0.3s both";
    asidenavstatus=0;
  };

});




window.onload = () => {
    // SHOW ASIDE NAV
    document.getElementById("dropdwn").style.transform = "scale(0)";
    navspan.style.transform = "scaleY(0)";
    //LOADER ANIMATION
   /* document.getElementById("loading").style.opacity = "0";
    document.getElementById("loading").style.visibility = "hidden";*/
    document.body.style.overflowY = "auto";
   // window.scrollTo(0, 0);
};






//SCROLLREVEAL
//knowledge
ScrollReveal().reveal('.knowledge h1', {delay: 500});
ScrollReveal().reveal('.knowledge h2', {delay: 500});
ScrollReveal().reveal('.about-me .icons .icon-box', { interval: 200, reset: true });
//projects
ScrollReveal().reveal('.project-title', {delay: 500});
ScrollReveal().reveal('.pro-active', {delay: 500});
ScrollReveal().reveal('.pro', {interval: 300});
ScrollReveal().reveal('.img-cont .img-box', {interval: 400, reset: true });
//certificates
//ScrollReveal().reveal('.certificates', {delay: 500});