const calculator = () => {
	let priceTotal = document.querySelector('#price-total');
	const calculatorBlock = document.querySelector('.calculator');
	const inputPromocode = document.querySelector('#promocode');

	const clubsPrices = {
		//массивы с ценами для разных клубов
		mozaika: [1999, 9900, 13900, 19900],
		schelkovo: [2999, 14990, 21990, 24990],
	};

	let selectedClub = 'mozaika',
		selectedMonth = 0,
		promocode = 1;

	//Вывод данных
	const outputPriceTotal = (club, month) => (priceTotal.textContent = Math.floor(clubsPrices[club][month] * promocode));

	if (calculatorBlock) {
		outputPriceTotal(selectedClub, selectedMonth);
		calculatorBlock.addEventListener('change', (event) => {
			//слушатель на изменения в калькуляторе
			const target = event.target;
			if (target.getAttribute('name') === 'club-name') {
				selectedClub = target.value; //какой клуб выбираем, то значение инпута и записывается в переменную
			}
			if (target.getAttribute('name') === 'card-type') {
				selectedMonth = target.value; //в переменную записывается соответстующее значение выбранному кол-ву месяцев
			}

			outputPriceTotal(selectedClub, selectedMonth); //рассчет и вывод итоговой цены
		});

		inputPromocode.addEventListener('input', () => {

			//при введении промокода "ТЕЛО2020" цена уменьшается на 30%
			if ((inputPromocode.value).toUpperCase() === 'ТЕЛО2019') {
				promocode = 0.7;
			} else {
				promocode = 1;
			}
			priceTotal.textContent = outputPriceTotal(selectedClub, selectedMonth);
		});
	}
}

export default calculator;