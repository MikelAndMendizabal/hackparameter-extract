$(document).ready(function()
{
	$('table').hide();
	$('address').hide();
	$('table').find('a').each(function() {
    $('h1').append($(this).attr('href')+'<br>');
	});
});