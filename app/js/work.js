$(document).ready(function(){
let expertises = [];
let order = '';
	

$(".search").on("click", ".search__button", function(){
	
	page = 1;
	
	let i = expertises.indexOf( $(this).parent().attr('title') );
	
	if (event.preventDefault) {
        event.preventDefault();
    } else {
        event.returnValue = false;
    }
	
	expertises.splice(i, 1); 

    data = {
        action: 'filter_posts',
        afp_nonce: afp_vars.afp_nonce,
        post_type: "post",
        expertises: expertises,
		page: page,
		orderby: orderby,
		order: order
    };

    $.ajax({ 
        type: "post",
        dataType: "json",
        url: afp_vars.afp_ajax_url, 
        data: data, 
        success: function(data, textStatus, XMLHttpRequest) {
            console.log(data);
            // Restore div visibility
            $('.post-results').fadeOut()
                .queue(function(n) {
                        $(this).html(data.response);
                        n();
            }).fadeIn();
        },
        error: function( XMLHttpRequest, textStatus, errorThrown ) {
            /*console.log( MLHttpRequest );
            console.log( textStatus );
            console.log( errorThrown );*/
            $('.post-results').fadeOut()
                .queue(function(n) {
                        $(this).html("No items found. ");
                        n();
            }).fadeIn();
        }
    });
	
    let text = $(this).parent().find('span').text();
    $('.construction-services-search__select > ul').children().each(function() {
        let currentElement = $(this);
        if (currentElement.find('span').text() == text) {
            currentElement.find('div').removeClass('active-radio');
        }
    });
    $(this).parent().remove();
});
	
$('.post-filter').click( function(event) {
	
	page = 1;
	
    if (event.preventDefault) {
        event.preventDefault();
    } else {
        event.returnValue = false;
    }
	
	let i = expertises.indexOf( $(this).attr('title') );
	
	if (i === -1 ) {
		expertises.push($(this).attr('title'));
	} else {
		expertises.splice(i, 1);
	}    

    data = {
        action: 'filter_posts',
        afp_nonce: afp_vars.afp_nonce,
        expertises: expertises,
		page: page,
		orderby: orderby,
		order: order
    };

    $.ajax({ 
        type: "post",
        dataType: "json",
        url: afp_vars.afp_ajax_url, 
        data: data, 
        success: function(data, textStatus, XMLHttpRequest) {
            //console.log(data);
            $('.post-results').fadeOut()
                .queue(function(n) {
                        $(this).html(data.response);
                        n();
            }).fadeIn();
        },
        error: function( XMLHttpRequest, textStatus, errorThrown ) {
            $('.post-results').fadeOut()
                .queue(function(n) {
                        $(this).html("No items found. ");
                        n();
            }).fadeIn();
        }
    });
});

$(".post-results").on("click", ".page-numbers", function(event){
	
    if (event.preventDefault) {
        event.preventDefault();
    } else {
        event.returnValue = false;
    }
	
	page = $(this).text();

    data = {
        action: 'filter_posts',
        afp_nonce: afp_vars.afp_nonce,
        expertises: expertises,
		page: page,
		orderby: orderby,
		order: order
    };

    $.ajax({ 
        type: "post",
        dataType: "json",
        url: afp_vars.afp_ajax_url, 
        data: data, 
        success: function(data, textStatus, XMLHttpRequest) {
            console.log(data);
            $('.post-results').fadeOut()
                .queue(function(n) {
                        $(this).html(data.response);
                        n();
            }).fadeIn();
        },
        error: function( XMLHttpRequest, textStatus, errorThrown ) {
            $('.post-results').fadeOut()
                .queue(function(n) {
                        $(this).html("No items found. ");
                        n();
            }).fadeIn();
        }
    });
});

$(".posts-top").on("click", "a", function(event){
	
    if (event.preventDefault) {
        event.preventDefault();
    } else {
        event.returnValue = false;
    }
	
	
	data = {
        action: 'filter_posts',
        afp_nonce: afp_vars.afp_nonce,
        expertises: expertises,
		page: page,
		orderby: orderby,
		order: order
    };
	

    $.ajax({ 
        type: "post",
        dataType: "json",
        url: afp_vars.afp_ajax_url, 
        data: data, 
        success: function(data, textStatus, XMLHttpRequest) {
            console.log(data);
            $('.results').fadeOut()
                .queue(function(n) {
                        $(this).html(data.response);
                        n();
            }).fadeIn();
        },
        error: function( XMLHttpRequest, textStatus, errorThrown ) {
            $('.results').fadeOut()
                .queue(function(n) {
                        $(this).html("No items found. ");
                        n();
            }).fadeIn();
        }
    });
	
});

});