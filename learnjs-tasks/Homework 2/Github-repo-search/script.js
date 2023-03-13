const API_URL = 'https://api.github.com/search/repositories?q='

const searchInput = document.getElementById('search-input')
const searchLabel = document.querySelector('.search-label')
const searchBtn = document.getElementById('search-btn')
const resultContainer = document.getElementById('result-container')
const resultList = resultContainer.querySelector('ul')

// Обработчик событий для клика и нажатия "Enter"
searchBtn.addEventListener('click', searchRepositories)
searchInput.addEventListener('keydown', (event) => {
	event.key === 'Enter' && searchRepositories()
})

// Функция поиска репозиториев
function searchRepositories() {
	const searchText = searchInput.value.trim()
	// Предупреждение, если строка короче 3 символов
	if (searchText.length < 3) {
		resultContainer.innerHTML = '<p>Введите не менее 3 символов</p>'
		return
	}

	const searchUrl = API_URL + encodeURIComponent(searchText)
	fetch(searchUrl)
		.then((resultContainer.innerHTML = '<div class="loader"></div>'))
		.then((response) => response.json())
		.then((data) => {
			// Проверяем полученные данные
			if (data.items.length === 0) {
				resultContainer.innerHTML = '<p>Ничего не найдено</p>'
			} else {
				resultContainer.innerHTML = ''
				// Отделяем первые 10 репозиториев, создаем ноду 'li', чтобы в нее вставить шаблонный текст
				data.items.slice(0, 10).forEach((item) => {
					const listItem = document.createElement('li')
					listItem.innerHTML = `<a href="${item.html_url}" target="_blank">${item.name}</a> <span>(Владелец: <b>${item.owner.login}</b>, Рейтинг: ${item.stargazers_count})</span>`
					resultList.appendChild(listItem)
				})
				resultContainer.appendChild(resultList)
			}
		})
		// Ловим ошибки
		.catch((error) => {
			resultContainer.innerHTML = `<p>Произошла ошибка: ${error.message}</p>`
		})
}
