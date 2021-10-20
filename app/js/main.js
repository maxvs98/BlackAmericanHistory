'use strict';

$('.search__input').on('click', function() {
	$(this).parent().addClass('active');
});

$('.search__close').on('click', function() {
    $(this).parent().removeClass('active');
});

$('.header__burger').on('click', function() {
    $('body').addClass('active-sidebar');
});

$('.header__cross-mobile').on('click', function() {
    $('body').removeClass('active-sidebar');
});

$('.header__mobile-search-button').on('click', function() {
    $('header .mobile-search').addClass('active-search');
});
$('.mobile-search__close').on('click', function() {
    $('header .mobile-search').removeClass('active-search');
});