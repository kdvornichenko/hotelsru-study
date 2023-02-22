import data from './specialOrder.data.js'
const specialOrder = () => {
	const cardsContainer = document.querySelector('.special-order .cards')

	cardsContainer.innerHTML = data
		.map((item) => {
			return `<div class="card">
			<div class="picture-holder">
			<img src=${item.img} alt='Кресло' />
			</div>
			<p class="card__description">${item.description}</p>
			<div class="card__price price">
			<span>${item.price} ₽</span>
			</div>
			<a class="card__buy-btn" href='#'>Купить</a>
			</div>`
		})
		.join('')
}

export default specialOrder
