$(document).ready( function(){

	DynamicResize($(window).width(), $(window).height());

	$('.news-year, .news-month').each( function(){
		var wid = $(this).width();
		var left = $(this).position().left;
		var $tag = $('<div>'+$(this).attr('name')+'</div>').css({
			'width': wid-left*2
		}).addClass('news-tag');
		$(this).append($tag);
	}); // put a year in the top-right corner of every publication

	$('.pub-name').click(function(){
		var loc = $(this).parent().find('a:contains("Pubmed")').attr('href');
		window.open(loc, '_blank');
	}); // set publication names to link to the old pubmed links

	$('#pub-list').find('a:contains("Pubmed")').css({'display': 'none'}); // remove the obsolete old pubmed links

	$('#pub-list li').each(function(){$(this).append($('<div>'+$(this).data('info').split(' ')[0]+'</div>').css({'position':'absolute','top':'5px','right':'5px','display':'inline-block','color':'#BBBBBB','font-weight':'lighter'}))}); // add a year to the top-right corner of every publication

	$('.people-square').mouseenter(function(){
		$(this).children('.people-over').stop(true).fadeIn(300);
	}).mouseleave(function(){
		$(this).children('.people-over').stop(true).fadeOut(300);
	});; // display/remove overlay on people page

  	var $elements = $('#pub-list li').detach().sort(function(a,b){
		var yearDiff = $(b).data('info').split(' ')[0] - $(a).data('info').split(' ')[0];
	    var monthDiff = $(b).data('info').split(' ')[1] - $(a).data('info').split(' ')[1];

		if (yearDiff != 0) {
			return yearDiff;
		}
		else if (monthDiff != 0) {
			return monthDiff;
		}
		else if (monthDiff == 0) {
			return 1;
		}
    });
    $elements.appendTo('#pub-list'); 
    // this is left over from when I wanted to make the publications sortable by date.  now they are all automatically sorted by date, with no option to resort.  if I wanted to resort by date or some other parameter, I'd use this code.  I could have just re-ordered the list items in the html, but this was easier.
    $('.link').each(function(){

    	var text = $(this).text();

    	$(this).click(function(){
    		window.open($(this).data('link'),'_blank');
    	});

    	$(this).onmouseover(function(){
    		text = $(this).text()
    		setTimeout(function(){
    			$(this).fadeOut(300);
    			$(this).text('').text('See Website');
    			$(this.fadeIn(300);
    		},500);
    	}).onmouseleave(function(){
    		setTimeout(function(){
    			$(this).fadeOut(300);
    			$(this).text('').text(text);
    			$(this.fadeIn(300);
    		},500);
    	});
    });
});

$(window).on('load resize', function(){
	var w = $(window).width();
	var h = $(window).height();

	DynamicResize(w,h);
});

$(document).scroll( function(){
	var scroll = $(document).scrollTop();
	var hmax = 150.; //the height of the bar at the top of the page
	var hmin = 50.; //the minimum height of the bar
	var diff = hmax - hmin; //the difference between max and min height
	var percent = scroll / diff;
	var rH = 400.;

	if (scroll < diff) {
		$('#nav-wrap').css({
			'background-color':'rgba(256,256,256,' + 1. - percent / 3. + ')',
			'height': hmax - scroll,
			'opacity': (1. / percent) * 0.9
		});
		$('.fade-with-navbar').css({
			'opacity': 1. - percent
		});
	}
	else if (scroll > diff) {
		$('#nav-wrap').css({
			'background-color':'',
			'height': hmin,
			'opacity': 0.9
		});
		$('.fade-with-navbar').css({'opacity': 0});
	} 
	if (scroll < rH) {
		$('.research-fade').css({
			'opacity': 1. - scroll / rH
		});
	}
	else if (scroll > rH) {
		$('.research-fade').css({'opacity': 0});
	}
});

function DynamicResize (w, h) {

	$('#main-wrap').css({
		'min-height': h - 150
	});

	$('#home-content').css({
		'margin-top': $('#home-image').height()
	});

	$('#contact-content').height(h - 250);

	$('#googlemaps div iframe').attr({
		'width' : $('#contact-content').width() * 0.65,
		'height': $('#contact-content').height()
	});

	$('#googlemaps').height($('#googlemaps div iframe').height());

	$('#contact').css({
		'min-height' : $('#googlemaps').height()
	});

	$('#collab-content div.collab-col').height((h - 150) * 0.8);

	$('#home-content').css({
		'margin-top': $('#home-image').height()
	});

	if (w > 1015.) {
		$('.home-list li').css({
			'font-size': 0.02 * w
		});
	} else if (w < 1015.) {
		$('.home-list li').css({
			'font-size': 0.02 * 1015.
		});
	}
	$('#collab-content div.collab-col').height((h - 150) * 0.8);

	$('#contact-content').height((h - 150) - $('#main-wrap-bottom').height());
}


