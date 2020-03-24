const burger = document.querySelector('.menu-burger');
const menu = document.querySelector('.menu');

function hide(e) {
	if (!e.target.classList.contains('menu-active')) {
		menu.classList.remove('menu-active');
		document.removeEventListener('click', hide);
	}
}

burger.addEventListener('click', function (e) {
	e.preventDefault();
	menu.classList.toggle('menu-active');
	setTimeout(() => {
		document.addEventListener('click', hide);
	}, 100);
});


