const form = document.querySelector('#comment-form')
const nameInput = document.querySelector('#name')
const nameInputError = document.querySelector('#name-error')
const commentInput = document.querySelector('#comment')
const commentInputError = document.querySelector('#comment-error')
const dateInput = document.querySelector('#date')
const commentList = document.querySelector('#comment-list')
const comments = []

// Функция для добавления блока с новым комментарием
function addComment(comment) {
	const li = document.createElement('li')
	li.classList.add('comment')
	li.innerHTML = `
    <p class="name">${comment.name}</p>
    <p class="text">${comment.comment}</p>
    <p class="date">${comment.date}</p>
    <span class="delete" title="Удалить комментарий"></span>
    <span class="like" title="Лайкнуть комментарий">&#10084;</span>
  `
	commentList.prepend(li)

	// Удалить комментарий
	const deleteButton = li.querySelector('.delete')
	deleteButton.addEventListener('click', () => {
		comments.splice(comments.indexOf(comment), 1)
		localStorage.setItem('comments', JSON.stringify(comments))
		li.remove()
	})

	// Лайкнуть комментарий
	const likeButton = li.querySelector('.like')
	likeButton.addEventListener('click', () => {
		comment.liked = !comment.liked
		localStorage.setItem('comments', JSON.stringify(comments))
		likeButton.classList.toggle('active', comment.liked)
	})
}

// Функция валидации формы и добавления комментария
function submitComment(event) {
	event.preventDefault()

	const name = nameInput.value.trim()
	const comment = commentInput.value.trim()
	let date = formattedDate(dateInput.value)

	// Функция для форматирования даты
	function formattedDate(date) {
		const year = new Date(date).getFullYear()
		const month = ('0' + (new Date(date).getMonth() + 1)).slice(-2)
		const day = ('0' + new Date(date).getDate()).slice(-2)
		const timeString = new Date().toLocaleTimeString('ru', {
			hour: 'numeric',
			minute: 'numeric',
		})
		return date !== ''
			? `${day}.${month}.${year}, ${timeString}`
			: new Date().toLocaleDateString('ru') + ', ' + timeString
	}

	if (!name) {
		nameInput.classList.add('is-invalid')
		nameInputError.textContent = 'Пожалуйста, введите ваше имя'
		return
	} else {
		const regex =
			/^[a-zA-Zа-яА-ЯёЁ]+(([',. -][a-zA-Zа-яА-ЯёЁ ])?[a-zA-Zа-яА-ЯёЁ]*)*$/
		if (!regex.test(name)) {
			nameInputError.textContent = 'Некорректное имя'
			return false
		}
	}

	if (!comment) {
		commentInput.classList.add('is-invalid')
		commentInputError.textContent = 'Пожалуйста, введите ваш комментарий'
		return
	}

	nameInput.classList.remove('is-invalid')
	commentInput.classList.remove('is-invalid')
	nameInputError.textContent = ''
	commentInputError.textContent = ''

	const newComment = {
		name,
		comment,
		date,
		liked: false,
	}
	comments.push(newComment)
	localStorage.setItem('comments', JSON.stringify(comments))

	addComment(newComment)
	formatDatesOnPage()
	form.reset()
}

// Обработчик события на изменение контента в полях ввода
nameInput.addEventListener('input', () => errorChecker(nameInput))
commentInput.addEventListener('input', () => errorChecker(commentInput))

// Функция для проверки наличия ошибки
function errorChecker(input) {
	if (input.nextElementSibling.textContent !== '') {
		input.classList.remove('is-invalid')
		input.nextElementSibling.textContent = ''
	}
}

// Обработчик события на отправку формы
form.addEventListener('submit', submitComment)

// Функция загрузки комментариев из localStorage
function loadComments() {
	const data = localStorage.getItem('comments')
	if (data) {
		const savedComments = JSON.parse(data)
		savedComments.forEach((comment) => {
			comments.push(comment)
			addComment(comment)
		})
	}
}

loadComments()

// Функция для форматирования даты на "Сегодня" или "Вчера"
function formatDatesOnPage() {
	const today = new Date()
	const yesterday = new Date(today - 24 * 60 * 60 * 1000)
	const dateElements = document.querySelectorAll('.comment .date')

	for (let i = 0; i < dateElements.length; i++) {
		const dateParts = dateElements[i].textContent.split(', ')
		if (dateParts[0].includes('Сегодня') || dateParts[0].includes('Вчера')) {
			return
		} else {
			const date = new Date(
				dateParts[0].replace(/(\d{2}).(\d{2}).(\d{4})/, '$2/$1/$3') +
					' ' +
					dateParts[1]
			)
			const timeString = date.toLocaleTimeString('ru', {
				hour: 'numeric',
				minute: 'numeric',
			})

			// проверяем, является ли дата сегодняшней или вчерашней
			if (date.toDateString() === today.toDateString()) {
				dateElements[i].textContent = 'Сегодня, ' + timeString
			} else if (date.toDateString() === yesterday.toDateString()) {
				dateElements[i].textContent = 'Вчера, ' + timeString
			} else {
				dateElements[i].textContent = dateParts[0] + ', ' + timeString
			}
		}
	}
}

formatDatesOnPage()
