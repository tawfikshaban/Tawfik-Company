let car1 = document.querySelector(".car-1");
let car2 = document.querySelector(".car-2");
let car3 = document.querySelector(".car-3");
let car4 = document.querySelector(".car-4");
let thing = document.querySelector(".thing");
let thing2 = document.querySelector(".thing2");
let thing3 = document.querySelector(".thing3");
let aboutImg = document.querySelector("#about-img");
let landingPageImg = document.querySelector("#landing-img");
const bullet = document.querySelectorAll(".nav-bullets .bullet");
const about = document.querySelector("#about");
const testimonials = document.querySelector("#testimonials");
const feature = document.querySelector("#features");
const skills = document.querySelector("#skills");
const product = document.querySelector("#products");
const saveButton = document.querySelector(".save");

let ImgArray = [
  "car-1.avif",
  "car-2.jpeg",
  "car-3.avif",
  "car-4.avif",
  "tawfik-1.jpg",
  "tawfik-2.jpg",
  "tawfik-3.jpg",
  "tawfik-4.jpg",
  "tawfik-5.jpg",
  "tawfik-6.jpg",
  "tawfik-7.jpg",
  "tawfik-8.jpg",
];

setInterval(() => {
  let RandomNumber = Math.floor(Math.random() * ImgArray.length);
  thing.style.backgroundImage = 'url("imgs/' + ImgArray[RandomNumber] + '")';
}, 5000);
setInterval(() => {
  let RandomNumber = Math.floor(Math.random() * ImgArray.length);
  thing2.style.backgroundImage = 'url("imgs/' + ImgArray[RandomNumber] + '")';
}, 5000);
setInterval(() => {
  let RandomNumber = Math.floor(Math.random() * ImgArray.length);
  thing3.style.backgroundImage = 'url("imgs/' + ImgArray[RandomNumber] + '")';
}, 5000);

let gear = document.querySelector(".setting-box");
const settingPage = document.querySelector(".setting-page");
let icon = document.querySelector(".gear");
gear.onclick = () => {
  settingPage.classList.toggle("r-0");
  icon.classList.toggle("r-200");
  icon.classList.toggle("animate-spin");
};

// gear.onclick = () => {
//   gear.classList.remove("r-200");
//   settingPage.classList.remove("r-0");
// };
// div.style.backgroundImage = "url(imgs/car-1.avif)";
thing.style.cssText =
  "padding-left:5px width:300px; height:500px;background-repeat:no-repeat; background-position:center center; background-size:contain; transition:0.7s; border-radius:20px; overflow:hidden;";
thing2.style.cssText =
  "padding-left:5px width:300px; height:500px;background-repeat:no-repeat; background-position:center center; background-size:contain; transition:0.7s; border-radius:20px; overflow:hidden;";
thing3.style.cssText =
  "padding-left:5px width:300px; height:500px;background-repeat:no-repeat; background-position:center center; background-size:contain; transition:0.7s; border-radius:20px; overflow:hidden;";

// thing.appendChild(div);

setTimeout(() => {
  thing.classList.remove("border");
  thing2.classList.remove("border");
  thing3.classList.remove("border");
}, 4350);

let bgGreen = document.querySelector(".bg-green");
let bgRed = document.querySelector(".bg-red");
let bgBlack = document.querySelector(".bgBlack");
let landingPage = document.querySelector(".landing");
let body = document.body;
let button = document.querySelector(".button");
let gallery = document.querySelector("#gallery");
let DarkButton = document.querySelector(".darkMode");
let NightButton = document.querySelector(".nightMode");
let contactUs = document.querySelector(".contact");
let overlay = document.querySelector(".overlay");
// Night Mode Button
NightButton.addEventListener("click", function () {
  // Remove Default Background Image
    body.style.removeProperty("background-image");
    landingPage.style.removeProperty("background-image");
    product.style.removeProperty("background-image");
    skills.style.removeProperty("background-image");
    feature.style.removeProperty("background-image");
    testimonials.style.removeProperty("background-image");
    about.style.removeProperty("background-image");
    gallery.style.removeProperty("background-image");
    contactUs.style.removeProperty("background-image");
    overlay.style.cssText = "display:none;";
  
  // Check Dark Mode And Remove It

  if (body.classList.contains("DarkBackground")) {
    body.classList.remove("DarkBackground");
  }
  // set Night Mode

  body.classList.add("NightBackground");

  // Check Active Class

  if (window.localStorage.getItem("Site-Mode") === "black") {
    DarkButton.style.cssText = "border:none;";
    NightButton.style.cssText = window.localStorage.getItem("activeClass");
  } else {
    DarkButton.style.cssText = "border:none;";
    NightButton.style.cssText = window.localStorage.getItem("activeClass");
  }

  // Check If NightMode Is Displaying

  if (body.classList.contains("NightBackground")) {
    aboutImg.setAttribute("src", " imgs/picture/gradient.png ");
    landingPageImg.setAttribute("src", " imgs/picture/color.png ");
  }

  // Set Active Class

  window.localStorage.setItem("Site-Mode", "#172554");
});

// Dark Mode Button
DarkButton.onclick = function () {
  // check if The Mode Is Not Night And Remove The Night Mode.
  if (
    body.classList.contains("NightBackground")
    // landingPage.classList.contains("NightBackground")
  ) {
    body.classList.remove("NightBackground");
    landingPage.classList.remove("NightBackground");
  }
  // Set Dark Mode Theme
  window.localStorage.setItem("Site-Mode", "black");
  body.classList.add("DarkBackground");

  if (
    window.localStorage.getItem("Site-Mode") === "black" ||
    window.localStorage.getItem("Site-Mode") === "#172554"
  ) {
    body.style.removeProperty("background-image");
    landingPage.style.removeProperty("background-image");
    product.style.removeProperty("background-image");
    skills.style.removeProperty("background-image");
    feature.style.removeProperty("background-image");
    testimonials.style.removeProperty("background-image");
    about.style.removeProperty("background-image");
    gallery.style.removeProperty("background-image");
    contactUs.style.removeProperty("background-image");
    overlay.style.cssText = "display:none;";
  }
  // landingPage.classList.add("DarkBackground");

  // Change Active Class
  if (window.localStorage.getItem("Site-Mode") === "#172554") {
    DarkButton.style.cssText = "border:none;";
    NightButton.style.cssText = window.localStorage.getItem("activeClass");
  } else {
    NightButton.style.cssText = "border:none;";
    DarkButton.style.cssText = window.localStorage.getItem("activeClass");
  }
  // Check If DarkMode Is Displaying
  if (body.classList.contains("DarkBackground")) {
    aboutImg.setAttribute("src", "imgs/picture/premium.png ");
    landingPageImg.setAttribute("src", " imgs/picture/Medal.png ");
  }
};

// After Reload Save The Mode

if (window.localStorage.getItem("Site-Mode") === "#172554") {
  body.classList.add("NightBackground");
  // landingPage.classList.add("NightBackground");
} else {
  document.documentElement.style.setProperty("--main-color", "#0284c7");
  body.classList.remove("NightBackground");
  body.classList.add("DarkBackground");
}

if (window.localStorage.getItem("Site-Mode") !== "#172554") {
  body.classList.add("DarkBackground");
}

// Save Active Class On Buttons

if (window.localStorage.getItem("Site-Mode") === "#172554") {
  DarkButton.style.cssText = "border:none;";
  NightButton.style.cssText = window.localStorage.getItem("activeClass");
} else {
  NightButton.style.cssText = "border:none;";
  DarkButton.style.cssText = window.localStorage.getItem("activeClass");
}

let MainColor = document.querySelector(".MainColor");
let SecundColor = document.querySelector(".SecundColor");
let ThirdColor = document.querySelector(".ThirdColor");
let FourColor = document.querySelector(".FourColor");

const ColorsList = document.querySelectorAll(".colors-list li");

// Change The Main Color With Their Data Color Attribute And Active Class
ColorsList.forEach((li) => {
  // Add Event Listener To Each Li And Change The Main Color With Their Data Color Attribute
  li.addEventListener("click", (e) => {
    document.documentElement.style.setProperty(
      "--main-color",
      e.target.dataset.color
    );
    window.localStorage.setItem("color_option", e.target.dataset.color);
  });
  // check other Lis If Have Color-ACTIVE
  li.addEventListener("click", () => {
    li.classList.add("color-active");
    ColorsList.forEach((otherLi) => {
      if (otherLi !== li) {
        otherLi.classList.remove("color-active");
      }
    });
  });
});

let color_option = localStorage.getItem("color_option");
document.documentElement.style.setProperty("--main-color", color_option);

if (window.localStorage.getItem("color_option") === MainColor.dataset.color) {
  MainColor.classList.add("color-active");
} else if (
  window.localStorage.getItem("color_option") === SecundColor.dataset.color
) {
  SecundColor.classList.add("color-active");
} else if (
  window.localStorage.getItem("color_option") === ThirdColor.dataset.color
) {
  ThirdColor.classList.add("color-active");
} else if (
  window.localStorage.getItem("color_option") === FourColor.dataset.color
) {
  FourColor.classList.add("color-active");
}
if (body.classList.contains("NightBackground")) {
  aboutImg.setAttribute("src", " imgs/picture/gradient.png ");
  overlay.style.cssText = "display:none;";
} else {
  aboutImg.setAttribute("src", " imgs/picture/premium.png ");
  overlay.style.cssText = "display:none;";
}

if (body.classList.contains("NightBackground")) {
  landingPageImg.setAttribute("src", "imgs/picture/color.png ");
} else {
  landingPageImg.setAttribute("src", "imgs/picture/Medal.png ");
}
let ourSkills = document.querySelector(".skills-progress");
const skillsLevel = document.querySelectorAll(".progress-level");
skillsLevel.forEach((skill) => {
  skill.style.height = "100%";
});

window.onscroll = function () {
  // Skills Offset Top
  let SkillsOffsetTop = ourSkills.offsetTop;
  //Skills Outer Height
  let skillsOuterHeight = ourSkills.offsetHeight;
  //window Height
  let windowHeight = this.innerHeight;
  //window ScrollTop
  let WindowScrollTop = this.pageYOffset;
  if (WindowScrollTop > SkillsOffsetTop + skillsOuterHeight - windowHeight) {
    skillsLevel.forEach((skill) => {
      skill.style.width = skill.dataset.progress;
    });
  }
};
let spanDate = document.querySelector(".first-date");
let firstDate = new Date();
let currantYear = firstDate.getFullYear();

bullet.forEach((bullet) => {
  bullet.addEventListener("click", (e) => {
    document.querySelector(e.target.dataset.section).scrollIntoView({
      behavior: "smooth",
    });
  });
});

let Button = document.querySelector(".rest");

Button.onclick = function () {
  Button.style.cssText = "background-color: #450a0a";
  setTimeout(() => {
    Button.style.cssText = "background-color:  #b91c1c ";
    window.location.reload();
  }, 180);

  localStorage.clear();
};

if (
  localStorage.getItem("color_option") === null &&
  localStorage.getItem("Site-Mode") === null
) {
  document.documentElement.style.setProperty("--main-color", "#0284c7");
  body.classList.remove("DarkBackground");
  body.classList.remove("NightBackground");
  landingPage.style.cssText =
    "background-image: url('imgs/dailydev_where_developers_suffer_together_mobile_shkn1w.jpg');  background-size:cover; background-position:center center; background-attachment:fixed";
  about.style.cssText =
    "background-image:url('https://images.pexels.com/photos/1809644/pexels-photo-1809644.jpeg?auto=compress&cs=tinysrgb&w=600'); background-size:cover; background-position:center center; background-attachment:fixed ";
  product.style.cssText =
    "background-image:url('https://dspncdn.com/a1/media/692x/94/a8/a5/94a8a5acb3154b5cd2de149ee366a0c7.jpg'); background-size:cover; background-position:center center; background-attachment:fixed ";
  skills.style.cssText =
    "background-image:url('https://images.pexels.com/photos/2246476/pexels-photo-2246476.jpeg?auto=compress&cs=tinysrgb&w=600'); background-size:cover; background-position:center center; background-attachment:fixed ";

  feature.style.cssText =
    "background-image:url('https://images.pexels.com/photos/1366957/pexels-photo-1366957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'); background-size:cover; background-position:center center; background-attachment:fixed ";

  testimonials.style.cssText =
    "background-image:url('https://images.pexels.com/photos/3980364/pexels-photo-3980364.jpeg?auto=compress&cs=tinysrgb&w=600'); background-size:cover; background-position:center center; background-attachment:fixed ";

  gallery.style.cssText =
    "background-image:url('https://images.pexels.com/photos/1707213/pexels-photo-1707213.jpeg?auto=compress&cs=tinysrgb&w=600'); background-size:cover; background-position:center center; background-attachment:fixed ";
  contactUs.style.cssText =
    "background-image:url( 'https://thumbs.dreamstime.com/b/dot-world-maps-globes-business-background-30062992.jpg'); background-size:cover; background-position:center center; background-attachment:fixed ";
}

// Save Button
saveButton.onclick = function () {
  saveButton.style.cssText = "background-color: #15803d";
  setTimeout(() => {
    // Reload Page
    saveButton.style.cssText = "background-color: ##052e16";
    window.location.reload();
  }, 200);
  saveButton.style.cssText = "background-color: #15803d";
};

let Nav = document.querySelector("nav");
let NavLi = document.querySelectorAll("nav li");
let NavUL = document.querySelector("#ul");
let LiLinks = document.querySelectorAll("nav ul li a");
let barIcon = document.querySelector(".bar");

// let AfterIcon = window.getComputedStyle(barIcon, "::after");

// console.log(AfterIcon.setProperty("border-bottom","transparent"))

barIcon.onclick = function () {
  barIcon.classList.toggle("fa-solid");
  barIcon.classList.toggle("fa-bars");
  barIcon.classList.toggle("fa-solid");
  barIcon.classList.toggle("fa-bars-staggered");
  barIcon.classList.toggle("bar-active");
  Nav.classList.toggle("hidden");
};

document.addEventListener("click", (e) => {
  e.stopPropagation();
  if (e.target !== barIcon && e.target !== NavUL) {
    Nav.classList.add("hidden");
    barIcon.classList.remove("bar-active");
    e.stopPropagation();
  }
});
