function safeExecute(selector, callback) {
    var elements = document.querySelectorAll(selector);
    if (elements.length > 0) {
        callback(elements);
    }
}



// * Мега меню
// Обработчик клика для каталога
document.getElementById('catalog').addEventListener('click', function (event) {
	this.classList.toggle('catalog_active')
	document.getElementById('megaMenu').classList.toggle('mega-menu_active')

	// Остановить всплытие, чтобы документ не "ловил" этот клик
	event.stopPropagation()
})

// Обработчик клика для всего документа
document.addEventListener('click', function (event) {
	const megaMenu = document.getElementById('megaMenu')

	// Проверить, что клик произошёл вне элемента megaMenu
	if (
		!megaMenu.contains(event.target) &&
		megaMenu.classList.contains('mega-menu_active')
	) {
		megaMenu.classList.remove('mega-menu_active')
		document.getElementById('catalog').classList.remove('catalog_active')
	}
})

// * Поиск

// Обработчик клика для поиска
document
	.getElementById('searchBtn')
	.addEventListener('click', function (event) {
		this.classList.toggle('search_active')
		document
			.getElementById('searchWindow')
			.classList.toggle('search-window_active')
		document.body.classList.toggle('no-scroll')
	})

// Функция для удаления классов
function removeActiveClasses() {
	document.getElementById('searchBtn').classList.remove('search_active')
	document
		.getElementById('searchWindow')
		.classList.remove('search-window_active')
	document.body.classList.remove('no-scroll')
}

// Обработчик для кнопки закрытия
document
	.querySelector('.search-window__close')
	.addEventListener('click', removeActiveClasses)

// Обработчик для клика вне формы поиска и кнопки закрытия внутри .search-window
document
	.getElementById('searchWindow')
	.addEventListener('click', function (event) {
		if (!event.target.closest('.search-window__wrapper')) {
			removeActiveClasses()
		}
	})

// Обработчик для закрытия по клавише Esc
document.addEventListener('keydown', function (event) {
	if (event.keyCode === 27) {
		// 27 - код клавиши Esc
		removeActiveClasses()
	}
})

/* //! Модальные окна */
/* //* Главное окно */

const modalWrapper = document.querySelector('.modal')
const modalMain = document.querySelector('.modal__main')

const bntMainModal = document.querySelector('[data-modal="mainModal"]')
const bntCloseMainModal = document.querySelector(
	'[data-modal="closeMainModal"]'
)

// Обработчик клика для модального окна
bntMainModal.addEventListener('click', addActiveClassesModal)

// Функция для добавления классов
function addActiveClassesModal() {
	modalWrapper.classList.add('active-modal')
	modalMain.classList.add('active-modal')
	document.body.classList.toggle('no-scroll')
}

// Обработчик для кнопки закрытия
bntCloseMainModal.addEventListener('click', removeActiveClassesModal)

// Функция для удаления классов
function removeActiveClassesModal() {
	modalWrapper.classList.remove('active-modal')
	modalMain.classList.remove('active-modal')
	document.body.classList.remove('no-scroll')
}

// Обработчик для клика по оверлею
modalWrapper.addEventListener('click', function (event) {
	if (!event.target.closest('.modal__main')) {
		removeActiveClassesModal()
	}
})

// Обработчик для закрытия по клавише Esc
document.addEventListener('keydown', function (event) {
	if (event.keyCode === 27) {
		// 27 - код клавиши Esc
		removeActiveClassesModal()
	}
})

/* //! Слайдер на главной странице */

$(document).ready(function () {
	let slickSlider = $('#mainSlider')

	if (slickSlider.length) {
		slickSlider.slick({
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			dots: true,
			speed: 500,
			fade: true,
			autoplay: true,
			autoplaySpeed: 7000,
		})
	}

	/* Навигация слайдера */
	$('#mainSliderPrev').on('click', function () {
		slickSlider.slick('slickPrev')
	})

	$('#mainSliderNext').on('click', function () {
		slickSlider.slick('slickNext')
	})
})

/* //* Таб на главной */

document.addEventListener('DOMContentLoaded', function () {
	// Открытие первой вкладки по умолчанию
	openTab(null, 'Tab1')

	// Добавляем класс активности первой кнопке
	var firstTabButton = document.querySelector('.btn-tab')
	if (firstTabButton) {
		firstTabButton.classList.add('btn-tab_active')
	}
})

function openTab(evt, tabName) {
	var i, tabcontent, tablinks

	// Скрываем весь контент вкладок
	tabcontent = document.getElementsByClassName('article')
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = 'none'
	}

	// Убираем активность со всех вкладок
	tablinks = document.getElementsByClassName('btn-tab')
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].classList.remove('btn-tab_active')
	}

	// Отображаем текущий контент вкладки и делаем вкладку активной
	document.getElementById(tabName).style.display = 'flex'
	if (evt) {
		evt.currentTarget.classList.add('btn-tab_active')
	}
}

