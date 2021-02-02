function burgerMenu(selector) {
	let menu = $(selector);
	let button = menu.find('.burger_btn');
	let links = menu.find('.burger_menu_link');
	let overlay = menu.find('.burger_menu_overlay');

	button.on('click', (e) => {
		e.preventDefault();
		toggleMenu();
	});

	links.on('click', () => toggleMenu());
	overlay.on('click', () => toggleMenu());

	function toggleMenu() {
		menu.toggleClass('burger_menu_active');

		if (menu.hasClass('burger_menu_active')) {
			$('body').css('overflow', 'hidden');
		} else {
			$('body').css('overflow', 'visible');
		}
	}
}

burgerMenu('.burger_menu');

const email = document.getElementById("email")
const pass = document.getElementById("pass")
const repass = document.getElementById("repass")
const btn = document.querySelector("#btn_submit")
const email_error_msg = document.querySelector(".email_error_msg")
const pass_error_msg = document.querySelector(".pass_error_msg")
const repass_error_msg = document.querySelector(".repass_error_msg")
const black_white = document.querySelector(".black_white")
let default_theme = true


black_white.addEventListener("click", function() {
	default_theme = !default_theme
	if (default_theme) {
		document.body.style.background = "linear-gradient(130.46deg, rgba(255,255,255, 0.3) 5.5%, #070000 73.02%)";
		document.querySelector(".intro__subtitle").style.color = "#000000"
		document.querySelector(".intro__title").style.color = "#000000"
		document.querySelector(".btn").style.background = "#000000"
		document.querySelector(".btn").style.color = "#fff"
		document.querySelector(".header_logo").style.color = "#000000"
		document.querySelector(".rect").style.fill = "#000000"
		document.querySelector(".path").style.fill = "#fff"
		document.querySelectorAll(".a").forEach((a) => {
			a.style.color = "#000000"
		})
		document.querySelector(".nav_login").style.color = "#000000"
		document.querySelector(".nav_login1").style.color = "#000000"
		document.querySelector(".login").style.color = "#000000"
		document.querySelector(".ellipse").style.fill = "#000000"
		document.querySelector(".path1").style.fill = "#fff"
		document.querySelector(".path2").style.fill = "#fff"
		document.querySelector(".path3").style.fill = "#fff"
		document.querySelector(".path4").style.fill = "#fff"
		document.querySelector(".black_white").style.background = "#000000"
		document.querySelector(".black_white").style.color = "#fff"
	}
	else {
		document.body.style.background = "linear-gradient(130.46deg, rgba(7, 0, 0, 0.71) 5.5%, #070000 73.02%)";
		document.querySelector(".intro__subtitle").style.color = "#fff"
		document.querySelector(".intro__title").style.color = "#fff"
		document.querySelector(".btn").style.background = "#fff"
		document.querySelector(".btn").style.color = "#000000"
		document.querySelector(".header_logo").style.color = "#fff"
		document.querySelector(".rect").style.fill = "#fff"
		document.querySelector(".path").style.fill = "#000000"
		document.querySelectorAll(".a").forEach((a) => {
			a.style.color = "#fff"
		})
		document.querySelector(".nav_login").style.color = "#fff"
		document.querySelector(".nav_login1").style.color = "#fff"
		document.querySelector(".login").style.color = "#fff"
		document.querySelector(".ellipse").style.fill = "#fff"
		document.querySelector(".path1").style.fill = "#000000"
		document.querySelector(".path2").style.fill = "#000000"
		document.querySelector(".path3").style.fill = "#000000"
		document.querySelector(".path4").style.fill = "#000000"
				document.querySelector(".black_white").style.background = "#fff"
		document.querySelector(".black_white").style.color = "#000000"
	}
})

email.addEventListener("blur", function() {
	if (validateEmail(email.value.trim())) {
		email.classList.remove("error_validation")
		email_error_msg.classList.add("hide")
	}
	else {
		email.classList.add("error_validation")
		email_error_msg.classList.remove("hide")
	}
	if (!email.value.trim()) {
		alert("Поле email пусте")
	}
});

pass.addEventListener("blur", function() {
	if (pass.value.trim().length >= 8 && validatePass(pass.value.trim())) {
		pass.classList.remove("error_validation")
		pass_error_msg.classList.add("hide")
	}
	else {
		pass.classList.add("error_validation")
		pass_error_msg.classList.remove("hide")
	}
	if (!pass.value.trim()) {
		alert("Поле password пусте")
	}
});

repass.addEventListener("blur", function() {
	if (repass.value == pass.value)  {
		repass.classList.remove("error_validation")
		btn.classList.remove("btn_error")
		repass_error_msg.classList.add("hide")
	}
	else {
		repass.classList.add("error_validation")
		btn.classList.add("btn_error")
		repass_error_msg.classList.remove("hide")
	}
	if (!repass.value.trim()) {
		alert("Поле repassword пусте")
	}
});

function validatePass(pass) {
    const re = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    return re.test(String(pass));
}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}