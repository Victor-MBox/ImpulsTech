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
document.getElementById('searchBtn').addEventListener('click', function (event) {
	this.classList.toggle('search_active')
	document.getElementById('searchWindow').classList.toggle('search-window_active')
    document.body.classList.toggle('no-scroll')
})

// Функция для удаления классов
function removeActiveClasses() {
    document.getElementById('searchBtn').classList.remove('search_active');
    document.getElementById('searchWindow').classList.remove('search-window_active');
    document.body.classList.remove('no-scroll');
}

// Обработчик для кнопки закрытия
document.querySelector('.search-window__close').addEventListener('click', removeActiveClasses);

// Обработчик для клика вне формы поиска и кнопки закрытия внутри .search-window
document.getElementById('searchWindow').addEventListener('click', function(event) {
    if (!event.target.closest('.search-window__wrapper')) {
        removeActiveClasses();
    }
});

// Обработчик для закрытия по клавише Esc
document.addEventListener('keydown', function(event) {
    if (event.keyCode === 27) { // 27 - код клавиши Esc
        removeActiveClasses();
    }
});

