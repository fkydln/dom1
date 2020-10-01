const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png",
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io",
  },
  footer: {
    copyright: "Copyright Great Idea! 2018",
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute("src", siteContent["cta"]["img-src"]);
// Dom is awesome
let ctaTxt = document.querySelector(".cta-text h1");
ctaTxt.textContent = siteContent["cta"]["h1"];
// get started button
let ctaTxtBt = document.querySelector(".cta-text button");
ctaTxtBt.textContent = siteContent["cta"]["button"];
//navbar manipulation
let navB = document.querySelectorAll("nav a");
navB[0].innerHTML = siteContent["nav"]["nav-item-1"];
navB[1].innerHTML = siteContent["nav"]["nav-item-2"];
navB[2].innerHTML = siteContent["nav"]["nav-item-3"];
navB[3].innerHTML = siteContent["nav"]["nav-item-4"];
navB[4].innerHTML = siteContent["nav"]["nav-item-5"];
navB[5].innerHTML = siteContent["nav"]["nav-item-6"];
//main content H4 manipulation
let mainContH4 = document.querySelectorAll(".text-content h4");
mainContH4[0].innerHTML = siteContent["main-content"]["features-h4"];
mainContH4[1].innerHTML = siteContent["main-content"]["about-h4"];
mainContH4[2].innerHTML = siteContent["main-content"]["services-h4"];
mainContH4[3].innerHTML = siteContent["main-content"]["product-h4"];
mainContH4[4].innerHTML = siteContent["main-content"]["vision-h4"];
//main content about
let mainContAbo = document.querySelectorAll(".text-content p");
mainContAbo[0].innerHTML = siteContent["main-content"]["features-content"];
mainContAbo[1].innerHTML = siteContent["main-content"]["about-content"];
mainContAbo[2].innerHTML = siteContent["main-content"]["services-content"];
mainContAbo[3].innerHTML = siteContent["main-content"]["product-content"];
mainContAbo[4].innerHTML = siteContent["main-content"]["vision-content"];
//middle img
let wideImg = document.querySelector("#middle-img");
wideImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);
//Contact h4
let contactCont = document.querySelectorAll(".contact h4");
contactCont[0].textContent = siteContent["contact"]["contact-h4"];
//contact p tag
let contactP = document.querySelectorAll(".contact p");
contactP[0].innerHTML = siteContent["contact"]["address"];
contactP[1].innerHTML = siteContent["contact"]["phone"];
contactP[2].innerHTML = siteContent["contact"]["email"];
// footer
let footerCont = document.querySelector("footer");
footerCont.textContent = siteContent["footer"]["copyright"];
//changing navbar text color to green
let navGreen = document.querySelectorAll("nav a");
navGreen[0].style.color = "green";
navGreen[1].style.color = "green";
navGreen[2].style.color = "green";
navGreen[3].style.color = "green";
navGreen[4].style.color = "green";
navGreen[5].style.color = "green";
//adding 2 more items to nav system
document.querySelector("nav").prepend("Login");
//append Child
let appendItem = document.createTextNode("Sign-Up");
document.querySelector("nav").appendChild(appendItem);
