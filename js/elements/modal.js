function modal() {
	const regDialog = document.querySelector('#reg-modal')
	const closeBtn = document.querySelector('.registration__close')

	regDialog.showModal()

	// Password hidden
	const showPsswdBtn = document.querySelector('.show_hide')
	const psswdInput = document.querySelector('#reg-form-psswrd')

	showPsswdBtn.addEventListener('click', function () {
		showPsswdBtn.classList.toggle('show')
		if (showPsswdBtn.classList.contains('show')) {
			psswdInput.type = 'text'
			this.setAttribute('title', 'Скрыть пароль')
		} else {
			psswdInput.type = 'password'
			this.setAttribute('title', 'Показать пароль')
		}
	})

	// Number input
	const mobileNumInput = document.querySelector('#reg-form-number')

	let mobCount = 0
	mobileNumInput.addEventListener('input', function (event) {
		// LAST CHAR
		let lastChar = this.value.charAt(this.value.length - 1)

		if (event.inputType === 'deleteContentBackward' && mobCount !== 0) {
			// Double backsbace if there is - char at the end
			mobCount--
		} else if (lastChar === '-') {
			mobCount = mobCount
		} else {
			mobCount++
		}
		console.log(mobCount)
		this.value = this.value.replace(/[^0-9\+\-]/g, '')

		if (this.value.charAt(0) === '+') {
			// Check dots and beginning of the num
			this.maxLength = 16
			// Dash
			if (mobCount === 2) {
				this.value += '-'
				lastChar = '-'
			} else if (mobCount === 5) {
				this.value += '-'
				lastChar = '-'
			} else if (mobCount === 8) {
				this.value += '-'
				lastChar = '-'
			} else if (mobCount === 10) {
				this.value += '-'
				lastChar = '-'
			}
			// 8-747-015-20-64
		} else {
			this.maxLength = 15
			// Dash
			if (mobCount === 1) {
				this.value += '-'
				lastChar = '-'
			} else if (mobCount === 4) {
				this.value += '-'
				lastChar = '-'
			} else if (mobCount === 7) {
				this.value += '-'
				lastChar = '-'
			} else if (mobCount === 9) {
				this.value += '-'
				lastChar = '-'
			}
		}
		console.log(lastChar)
	})

	closeBtn.addEventListener('click', function () {
		regDialog.closeModal()
	})
}

export default modal
