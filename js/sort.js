$(document).ready( function(){

	// $('.pub-image').click(function(){
	// 	$(this).children('img').css({
	// 		'width':'70%',
	// 		'position':'fixed',
	// 		'top' : '25%',
	// 		'left': '25%',
	// 		'z-index':'10'
	// 	});
	// });

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
});
