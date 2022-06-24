document.getElementById("submit").addEventListener("click", function(){
    window.alert("You've sescessfully registered into It Club Academia");
})

// const hamburger = document.querySelector(".hamburger")
// const navMenu = document.querySelector("nav")

// hamburger.addEventListener("click", () => {
//     hamburger.classList.toggle("active");
//     navMenu.classList.toggle("active");
// })

// document.querySelectorAll("li").forEach(n => n.addEventListener("click", () => {
//     hamburger.classList.remove("active");
//     navMenu.classList.remove("active");
// }))

/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }