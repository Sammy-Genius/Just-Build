let btn = document.querySelector(".btn");
let answer = document.querySelector(".answer");
let holder = document.querySelector(".holder");
let box1 = document.querySelector(".box1");
let box2 = document.querySelector(".box2");
let tl = gsap.timeline();

tl.from("body", {opacity:0, duration:1, scale:0.2, ease: "bounce"})
.from("h3", {rotateY:180, duration:1.2, stagger:0.5}, "+=.3")
.from(".logo", {opacity:0, duration:1, x:-50, ease: Power2.easeInOut})
.from(".pic", {opacity:0, duration:1, y:50, ease: Power2.easeInOut}, "-=.6")
.from(".pic", {rotateY:360, duration:1}, "+=.3");

btn.addEventListener("click", () => {
    let random = Math.random();
    random = Math.round(random) * 2;

    tl.from(".answer", {opacity:0, duration:1, y:-50, ease:"elastic"});
    

    if(random === 0) {
        answer.innerHTML = "You don't have to know everything about English before you start speaking it. Therefore, just like English, you don't have to know everything about a programming language to start building software.";
    }else if(random === 1) {
        answer.innerHTML = "No! you don't. Now will you build some shit or make excuses?";
    }else {
        answer.innerHTML = "No, you don't! Now stop trying to learn everything and build some shit!";
    }
});

box1.addEventListener("click", () => {

    if (box2.style.visibility == "hidden") {
        box2.style.visibility = "visible";
        box2.innerHTML = "Let's do this shit!";
        box2.style.width = "100%";
        box1.style.visibility = "hidden";
    }
    else {
        box2.style.visibility = "hidden";
        box1.style.visibility = "visible";
    }
});



