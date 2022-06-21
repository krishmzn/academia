document.getElementById("submit").addEventListener("click", function(){
    window.alert("You've sescessfully registered into It Club Academia");
})

const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector("nav")

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll("li").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))