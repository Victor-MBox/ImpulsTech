// * Слайдер на странице - Наша деятельность
$(document).ready(function () {
	// Цикл для инициализации каждого слайдера
	for (var i = 1; i <= 6; i++) {
		let sliderId = '#examplesCartSlider' + i
		let slider = $(sliderId)

		if (slider.length) {
			slider.slick({
				// Ваши настройки для Slick Slider
				infinite: true,
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: true,
				dots: true,
				speed: 500,
				fade: true,
			})
		}
	}
}) 
