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


// Card Carousel
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

	let q1 = getElementsByClassName('q1');
	let q2 = getElementsByClassName('q2');
	let q3 = getElementsByClassName('q3');
	let q4 = getElementsByClassName('q4');

	let p1 = getElementsByClassName('p1');
	let p2 = getElementsByClassName('p2');
	let p3 = getElementsByClassName('p3');
	let p4 = getElementsByClassName('p4');

	q1.addEventListener(click, ()=>{
		p1.style.display = "block"
	});

	q2.addEventListener(click, ()=>{
		p2.style.display = "block"
	});

	q3.addEventListener(click, ()=>{
		p1.style.display = "block"
	});

	q4.addEventListener(click, ()=>{
		p1.style.display = "block"
	});