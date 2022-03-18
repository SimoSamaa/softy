AOS.init();

let myLinkhome = document.querySelector("li .link-home");
let myLinkabout = document.querySelector("li .link-about");
let myLinkprocess = document.querySelector("li .link-process");
let myLinktestimonials = document.querySelector("li .link-testimonials");
let myLinkpricing = document.querySelector("li .link-pricing");
let myLinkblog = document.querySelector("li .link-blog");
let myLinkcontact = document.querySelector("li .link-contact");

window.onscroll = function () {
    // home
    if (scrollY >= 600) {
        myLinkhome.style.removeProperty("color");
    } else myLinkhome.style.color = "#ff589e";
    // about
    if (scrollY >= 600) {
        myLinkabout.style.color = "#ff589e";
    } else myLinkabout.style.removeProperty("color");
    // Process
    if (scrollY >= 1300) {
        myLinkprocess.style.color = "#ff589e";
        myLinkabout.style.removeProperty("color");
    } else myLinkprocess.style.removeProperty("color");
    // testimonials
    if (scrollY >= 2200) {
        myLinktestimonials.style.color = "#ff589e";
        myLinkprocess.style.removeProperty("color");
    } else myLinktestimonials.style.removeProperty("color");
    // pricing
    if (scrollY >= 2600) {
        myLinkpricing.style.color = "#ff589e";
        myLinktestimonials.style.removeProperty("color");
    } else myLinkpricing.style.removeProperty("color");
    // blog
    if (scrollY >= 4300) {
        myLinkblog.style.color = "#ff589e";
        myLinkpricing.style.removeProperty("color");
    } else myLinkblog.style.removeProperty("color");
    // contact
    if (scrollY >= 4800) {
        myLinkcontact.style.color = "#ff589e";
        myLinkblog.style.removeProperty("color");
    } else myLinkcontact.style.removeProperty("color");
    // counter
    if (window.scrollY >= myCounter.offsetTop) {
        if (!start) {
            myNumbers.forEach((count) => startCounter(count));
        }
        start = true
    }
};
// counters
let myCounter = document.querySelector("#pricing");
let myNumbers = document.querySelectorAll("#number");
let start = false;
function startCounter(ele) {
    let goal = ele.dataset.goal;
    let counter = setInterval(() => {
        ele.textContent++;
        if (ele.textContent == goal) {
            clearInterval(counter)
        }
    }, 3000 / goal)
};
