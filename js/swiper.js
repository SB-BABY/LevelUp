var swiper = new Swiper(".mySwiper", {
	slidesPerView: 3,
	spaceBetween: 30,
	breakpoints: {
		1024: {
			slidesPerView: 3,
			spaceBetween: 50,
		},
		768: {
			slidesPerView: 2,
			spaceBetween: 40,
		},
		320: {
			slidesPerView: 1,
		}
	},
});

var swiper = new Swiper(".productSwiper", {
	slidesPerView: 1,
});
