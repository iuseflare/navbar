let hamburger = document.getElementById('hamburger'),
	opened = false,
	navbar = document.querySelector('.navbar')

hamburger.addEventListener('click', navFunction)

function navFunction() {
	if (opened) {
		navbar.classList.remove("closed")
		navbar.classList.add("opened")
		opened = false
	} else {
		navbar.classList.remove("opened")
		navbar.classList.add("closed")
		opened = true
	}
}

navFunction()



