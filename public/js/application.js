
'use strict';

$('.search__input').on('click', function() {
	$(this).parent().addClass('active');
});

$('.menu-toggle-button').on('click', function() {
    $(this).parent().find('ul').slideToggle();
    $(this).parent().find('ul').css('display','block');
    $(this).parent().find('svg').toggleClass('reversed');
});

$('.mob-menu-item-wrap span').on('click', function() {
    $('.mobile-menu__list').css('display','none');
    $('.mobile-menu__sublist').css('display','block');
});

$('.modal-menu__sublist-title').on('click', function() {
    $('#menu-header-menu-2').css('display','block');
    $('.mobile-menu__sublist').css('display','none');
});


let form = document.getElementById('form1');
if (form) {
    form.noValidate = true;
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        $('#form1-name-wrap').removeClass('invalid-input');
        $('#form1-phone-wrap').removeClass('invalid-input');
        if (!event.target.checkValidity()) {
            let name = document.getElementById('form1-name');
            if (!name.checkValidity()) {
                $('#form1-name-wrap').addClass('invalid-input');
            }
            let phone = document.getElementById('form1-phone');
            if (!phone.checkValidity()) {
                $('#form1-phone-wrap').addClass('invalid-input');
            }
        } else {
            $('.consultation-form__title').text('Спасибо за вашу заявку!');
            $('.data-checkbox-label').css('visibility','hidden');
            $('.consultation-form__group').css('visibility','hidden');
            $('.consultation-form__title').addClass('accepted');
        }
    }, false);
}


let form2 = document.getElementById('form2');
if (form2) {
    form2.noValidate = true;
    form2.addEventListener('submit', function(event) {
        event.preventDefault();
        $('#form2-name-wrap').removeClass('invalid-input');
        $('#form2-phone-wrap').removeClass('invalid-input');
        if (!event.target.checkValidity()) {
            let name = document.getElementById('form2-name');
            if (!name.checkValidity()) {
                $('#form2-name-wrap').addClass('invalid-input');
            }
            let phone = document.getElementById('form2-phone');
            if (!phone.checkValidity()) {
                $('#form2-phone-wrap').addClass('invalid-input');
            }
        } else {
            $('.feedback__title').text('Спасибо за вашу заявку!');
            $('#form2').css('visibility','hidden');
            $('.feedback__title').addClass('accepted');
        }
    }, false);
}