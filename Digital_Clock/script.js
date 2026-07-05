const clock = document.querySelector(".clock");

clock.style.fontSize = "30px";
clock.style.fontWeight = "800";

setInterval(function(){
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
}, 1000);