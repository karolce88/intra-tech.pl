$('.team-carousel').slick({
	arrows: false,
	autoplaySpeed: 2400,
	autoplay: true,
	mobileFirst: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
			},
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
			},
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 3,
			},
		},
	],
})
