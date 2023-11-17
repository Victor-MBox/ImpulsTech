function safeExecute(selector, callback) {
	var elements = document.querySelectorAll(selector)
	if (elements.length > 0) {
		callback(elements)
	}
}

// * Мега меню
safeExecute('#catalog', function (elements) {
	var catalog = elements[0]
	var megaMenu = document.getElementById('megaMenu')

	if (megaMenu) {
		catalog.addEventListener('click', function (event) {
			this.classList.toggle('catalog_active')
			megaMenu.classList.toggle('mega-menu_active')
			event.stopPropagation()
		})

		document.addEventListener('click', function (event) {
			if (
				!megaMenu.contains(event.target) &&
				megaMenu.classList.contains('mega-menu_active')
			) {
				megaMenu.classList.remove('mega-menu_active')
				catalog.classList.remove('catalog_active')
			}
		})
	}
})

// * Поиск
safeExecute('#searchBtn', function (elements) {
	var searchBtn = elements[0]
	var searchWindow = document.getElementById('searchWindow')

	if (searchWindow) {
		searchBtn.addEventListener('click', function (event) {
			this.classList.toggle('search_active')
			searchWindow.classList.toggle('search-window_active')
			document.body.classList.toggle('no-scroll')
		})

		document
			.querySelector('.search-window__close')
			.addEventListener('click', removeActiveClasses)

		searchWindow.addEventListener('click', function (event) {
			if (!event.target.closest('.search-window__wrapper')) {
				removeActiveClasses()
			}
		})

		document.addEventListener('keydown', function (event) {
			if (event.keyCode === 27) {
				// 27 - код клавиши Esc
				removeActiveClasses()
			}
		})
	}
})

function removeActiveClasses() {
	document.getElementById('searchBtn').classList.remove('search_active')
	document
		.getElementById('searchWindow')
		.classList.remove('search-window_active')
	document.body.classList.remove('no-scroll')
}

/* //! Модальные окна */
safeExecute('[data-modal="mainModal"]', function (elements) {
	var bntMainModal = elements[0]
	var modalWrapper = document.querySelector('.modal')
	var modalMain = document.querySelector('.modal__main')
	var bntCloseMainModal = document.querySelector(
		'[data-modal="closeMainModal"]'
	)

	if (modalWrapper && modalMain && bntCloseMainModal) {
		bntMainModal.addEventListener('click', addActiveClassesModal)
		bntCloseMainModal.addEventListener('click', removeActiveClassesModal)

		modalWrapper.addEventListener('click', function (event) {
			if (!event.target.closest('.modal__main')) {
				removeActiveClassesModal()
			}
		})

		document.addEventListener('keydown', function (event) {
			if (event.keyCode === 27) {
				// 27 - код клавиши Esc
				removeActiveClassesModal()
			}
		})
	}
})

function addActiveClassesModal() {
	modalWrapper.classList.add('active-modal')
	modalMain.classList.add('active-modal')
	document.body.classList.toggle('no-scroll')
}

function removeActiveClassesModal() {
	modalWrapper.classList.remove('active-modal')
	modalMain.classList.remove('active-modal')
	document.body.classList.remove('no-scroll')
}

/* //! Слайдер на главной странице */
if (window.jQuery) {
	$(document).ready(function () {
		let slickSlider = $('#mainSlider')

		if (slickSlider.length) {
			slickSlider.slick({
				// Ваши настройки для Slick Slider
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

			$('#mainSliderPrev').on('click', function () {
				slickSlider.slick('slickPrev')
			})

			$('#mainSliderNext').on('click', function () {
				slickSlider.slick('slickNext')
			})
		}
	})
}

/* //* Таб на главной */
safeExecute('.btn-tab', function (elements) {
	openTab(null, 'Tab1')
	var firstTabButton = elements[0]
	if (firstTabButton) {
		firstTabButton.classList.add('btn-tab_active')
	}
})

function openTab(evt, tabName) {
	var i, tabcontent, tablinks
	tabcontent = document.getElementsByClassName('article')
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = 'none'
	}

	tablinks = document.getElementsByClassName('btn-tab')
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].classList.remove('btn-tab_active')
	}

	document.getElementById(tabName).style.display = 'flex'
	if (evt) {
		evt.currentTarget.classList.add('btn-tab_active')
	}
}
