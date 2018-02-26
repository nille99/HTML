
var stripes = new Array();
var stripeDisplayTime = 11000;
var stripeIndex = 0;

$(function()
{
	stripes = $('#stripcontainer').children('.stripewrap');  
	for(var i = 0; i < stripes.length; i++)
	{
		var child = stripes[i];
		$(child).css("zIndex", i);
		$(child).css("position", "relative");
        if($(child).hasClass("sommarkampanj"))
   		{
     		$(child).css("cursor", "pointer");
     		$(child).bind("click", function()
     		{
   		 		document.location.href = "/sommarkampanj" + (document.location.href.match(/-v2/) ? '-v2' : '');
   		 	});
		}
        if($(child).hasClass("referenser"))
   		{
     		$(child).css("cursor", "pointer");
     		$(child).bind("click", function()
     		{
		 			document.location.href = "/referenser" + (document.location.href.match(/-v2/) ? '-v2' : '');
	 		});
	   	}
		if(i > 0)
		{
			$(child).css("top", "0px");
		}
	}
	setTimeout(flipStripe, stripeDisplayTime);
});

function flipStripe()
{
	if(stripes.length > 0)
	{		
		var oldStripeIndex = stripeIndex;
		stripeIndex++;
		if(stripeIndex >= stripes.length)
			stripeIndex = 0;
		var stripe = $(stripes[stripeIndex]);
		var oldStripe = $(stripes[oldStripeIndex]);
		stripe.css("zIndex", "2");
		oldStripe.css("zIndex", "1");
		stripe.hide();
		stripe.css("top", "-150px");
		oldStripe.css("top", "-145px");
		oldStripe.before(stripe);
		stripe.show();
		stripe.animate({ top : "0px" }, { display : "block", duration: 1500, easing: "easeOutBounce",complete : function() { setTimeout(flipStripe, stripeDisplayTime); }});
		//, complete : function() { setTimeout(flipStripe, stripeDisplayTime); }}); //.animate({top : "10px"} , { duration : 350 , easing : "easeOutCirc"}).animate({top : "0px"} , { duration : 200 , easing : "easeInCirc"});
	}	
}
