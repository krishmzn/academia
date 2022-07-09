const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
	hamburger.classList.toggle("active");
	navMenu.classList.toggle("active");
})
// To close hamburger
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
	hamburger.classList.remove("active");
	navMenu.classList.remove("active");
}))

// CARD CAROUSEL
let span = document.getElementsByClassName('sb');
let project = document.getElementsByClassName('project')
let project_page = Math.ceil(project.length / 4);
let l = 0;
let movePer = 25.34;
let maxMove = 203;
// mobile_view	
let mob_view = window.matchMedia("(max-width: 768px)");
if (mob_view.matches) {
	movePer = 50.36;
	maxMove = 504;
}

let right_mover = () => {
	l = l + movePer;
	if (project == 1) { l = 0; }
	for (const i of project) {
		if (l > maxMove) { l = l - movePer; }
		i.style.left = '-' + l + '%';
	}
}
let left_mover = () => {
	l = l - movePer;
	if (l <= 0) { l = 0; }
	for (const i of project) {
		if (project_page > 1) {
			i.style.left = '-' + l + '%';
		}
	}
}
span[1].onclick = () => { right_mover(); }
span[0].onclick = () => { left_mover(); }

// FAQ
faqUpdate()
function faqUpdate(){
	var select = document.getElementsByClassName('sfaq');
	var option = select.options[select.selectedIndex];

	document.getElementsByClassName('showfaq').value = option.value;
}