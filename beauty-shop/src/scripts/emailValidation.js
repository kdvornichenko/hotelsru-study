const emailValidation = () => {
	const emailWrapper = document.querySelector('.banner_email .wrapper-email')
	const emailInput = emailWrapper.querySelector('input')
	const sendEmailBtn = emailWrapper.querySelector('span')

	sendEmailBtn.addEventListener('click', () => {
		validateEmail(emailInput)
	})

	function validateEmail(emailInput) {
		const validRegex =
			/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

		if (emailInput.value.match(validRegex)) {
			emailInput.value = ''

			emailInput.classList.contains('invalid') &&
				emailInput.classList.remove('invalid')

			emailWrapper.classList.toggle('done')

			setTimeout(() => {
				emailWrapper.classList.toggle('done')
			}, 2000)

			return true
		} else {
			emailInput.value
			emailInput.classList.add('invalid')

			return false
		}
	}
}
export default emailValidation
