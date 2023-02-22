const mobileMenuToggle = () => {
	const burger = document.querySelector('.burger')
	const mobMenu = document.querySelector('.mobile-menu')
	const blur = document.querySelector('.blur')

	function mobileMenu() {
		burger.classList.toggle('active')
		mobMenu.classList.toggle('active')
		blur.classList.toggle('active')

		document.body.classList.toggle('overflow-hidden')
		document.documentElement.classList.toggle('overflow-hidden')
	}

	burger.addEventListener('click', () => mobileMenu())
	blur.addEventListener('click', () => mobileMenu())
}

export default mobileMenuToggle
