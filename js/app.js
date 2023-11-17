$(document).ready(function () {
	let testSlider = $('#examplesCartSlider1')

	if (testSlider.length) {
		testSlider.slick({
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
})
