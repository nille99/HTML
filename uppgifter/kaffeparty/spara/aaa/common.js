
function checkContactForm(f, a, checkid)
{
	a = a || "";
	var name = f.foretagsnamn;
	var phone = f.telefonnr;
	var epost = f.epost;
	var meddelande = f.meddelande;
	var sscheck = $(checkid);
	if(name.value == "" || (phone.value == "" && epost.value == ""))
	{
		if(epost.value == "")
		{
			epost.focus();
			$('#contact_error_phone' + a).show();
		}
		if(phone.value == "")
		{
			phone.focus();
			$('#contact_error_phone' + a).show();
		}
		if(name.value == "")
		{
			name.focus();
			$('#contact_error_name' + a).show();
		}
		return(false);	
	}	
	if(sscheck.length > 0 && !sscheck.prop('checked'))
	{
		alert('Du måste kryssa i rutan om att du inte är en spamrobot!');
		return(false);
	}
	return(true);	                           
}


function fbicon()
{
	document.write('<div id="fb-root"></div><script src="http://connect.facebook.net/sv_SE/all.js#appId=218696888167297&amp;xfbml=1"></script><fb:like href="http://www.hemsidadirekt.se" send="true" layout="button_count" width="350" show_faces="false" font=""></fb:like>');
}

$(function()
{
	gapi.plusone.render('plusonecontainer', {"size": "standard", "count": "true"});
	$('a.fancybox').fancybox({ width : 800 , height : 500, autoDimensions : false , overlayShow : true});
	$('a.fancy-link').each(function(a,b)
	{
		$(b).click(function()
		{
			$.ajax({
				type : "GET",
				cache : false,
				url : $(this).attr("href"),
				success : function(data)
				{
					$.fancybox(data,
					{
	        			'autoDimensions' : false,
						'width' : 640,
						'height' : 120,
						'transitionIn' : 'elastic',
						'transitionOut' : 'elastic',
						'easingIn' : 'easeOutBack',
						'easingOut' : 'easeInBack',
						'title' : 'Kontakta oss',
						'titleShow' : true
					});	
				}
			});
			return(false);
		});
	});

	$('a.google-maps-link').each(function(a,b)
	{
		$(b).click(function()
		{
			$.ajax({
				type : "GET",
				cache : false,
				url : $(this).attr("href"),
				success : function(data)
				{
					$.fancybox(data,
					{
        					'autoDimensions' : false,
						'width' : 640,
						'height' : 500,
						'transitionIn' : 'elastic',
						'transitionOut' : 'elastic',
						'easingIn' : 'easeOutBack',
						'easingOut' : 'easeInBack',
						'title' : 'Kontakta oss',
						'titleShow' : true
					});	
				}
			});
			return(false);
		});
	});
	$('.webmail').each(function(a,b)
	{
		$(b).click(function()
		{
			$.ajax({
				type : "POST",
				cache : false,
				url : "/login-webmail",
				data : $(this).serializeArray(),
				success : function(data)
				{
					$.fancybox(data,
					{
        				'autoDimensions' : false,
						'width' : 350,
						'height' : 170,
						'transitionIn' : 'elastic',
						'transitionOut' : 'elastic',
						'easingIn' : 'easeOutBack',
						'easingOut' : 'easeInBack',
						'title' : 'Kontakta oss',
						'titleShow' : true
					});	
				}
			});
			return(false);
		});
	});
	$('.admin').each(function(a, bb)
	{
		$(bb).click(function()
		{
			$.ajax({
				type : "POST",
				cache : false,
				url : "/login-admin",
				data : $(this).serializeArray(),
				success : function(data)
				{
					$.fancybox(data,
					{
        				'autoDimensions' : false,
						'width' : 350,
						'height' : 170,
						'transitionIn' : 'elastic',
						'transitionOut' : 'elastic',
						'easingIn' : 'easeOutBack',
						'easingOut' : 'easeInBack',
						'title' : 'Kontakta oss',
						'titleShow' : true
					});	
					$('a.help-login').each(function(a,b)
					{
						$(b).click(function()
						{
							tip($(bb), $('input#' + $(this).attr("rel")).attr("title"));
							return(false);
						});
					}
					);
				}
			});
			return(false);
		});
	});
	$('#intresseforumlarbtn').each(function(i,n)
	{
		$(n).click(function()
		{
			$.ajax({
				type : "POST",
				cache : false,
				url : "/kontakt-formular",
				data : $(this).serializeArray(),
				success : function(data)
				{
					$.fancybox(data,
					{
        				'autoDimensions' : false,
						'width' : 500,
						'height' : 370,
						'transitionIn' : 'elastic',
						'transitionOut' : 'elastic',
						'easingIn' : 'easeOutBack',
						'easingOut' : 'easeInBack',
						'title' : 'Kontakta oss',
						'titleShow' : true
					});	
				}
			});
			return(false);
		});
	});
	$('#intresseforumlarbtn-v2').each(function(i,n)
	{
		$(n).click(function()
		{
			$.ajax({
				type : "POST",
				cache : false,
				url : "/kontakt-formular-v2",
				data : $(this).serializeArray(),
				success : function(data)
				{
					$.fancybox(data,
					{
        				'autoDimensions' : false,
						'width' : 500,
						'height' : 370,
						'transitionIn' : 'elastic',
						'transitionOut' : 'elastic',
						'easingIn' : 'easeOutBack',
						'easingOut' : 'easeInBack',
						'title' : 'Kontakta oss',
						'titleShow' : true
					});	
				}
			});
			return(false);
		});
	});
});

function tip(lnk, txt)
{
	$.fancybox(txt,
	{
        'autoDimensions' : false,
		'width' : 430,
		'height' : 120,
		'onClosed' : function() 
		{
			lnk.click();
		}
	});
}
