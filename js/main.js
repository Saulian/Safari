$(function(){

});
const scrollBtn = document.querySelector('.show-btn');
window.onscroll = () => {
    if(window.scrollY > 600) {
        scrollBtn.classList.remove('show-btn-hide');
    } else if(window.scrollY < 600) {
        scrollBtn.classList.add('show-btn-hide');
    }

    scrollBtn.onclick = () => {
        window.scrollTo(0, 0);
    };
};

$(document).ready(function() {
	$('.abouttour__popup-link').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	});

    $('.gallery__item-inner').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			// titleSrc: function(item) {
			// 	return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
			// }
		}
	});

    $('.gallery__slider').slick({
        prevArrow:'<button type="button" class="slick-prev slick-btn"><img src="images/gallery/arr-left.svg"></button>',
        nextArrow:'<button type="button" class="slick-next slick-btn"><img src="images/gallery/arr-right.svg"></button>'
    });
// делаем переключатель класса для бургера
	$('.menu__btn').on('click', function(){
		$('.menu__list').toggleClass('menu__list--active');
	});
});