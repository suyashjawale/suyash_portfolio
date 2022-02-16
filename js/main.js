// Use these websites to minify and obfuscate the javascript code

// First Use - https://www.toptal.com/developers/javascript-minifier/
// Next Use - https://obfuscator.io/

$(document).ready(function() {

	var previousValue="#home";

	function canvas(colors) {
	  try {
	    TagCanvas.Start('myCanvas', 'tags', {
	      animTiming: "smooth",
	      textColour: colors,
	      shuffleTags:true,
	      depth: 1.1,
	      minSpeed: 0.01,
	      maxSpeed: 0.06,
	      shape: "sphere",
	      freezeDecel:true,
	      pinchZoom:true,
	      wheelZoom:true,
	      noSelect: true,
	      textHeight: 18,
	      initial: [0.1, -0.1],
	      repeatTags: 0,
	      fadeIn:2000
	    });
	  } catch (e) {
	    document.getElementById('myCanvasContainer').style.display = 'none';
	  }
	}


	 $(window).on('load', function () {
	 	$(".pages").hide();
	 	$("#home").show();
	 	if(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
	 		canvas("#66FF66");
	 		$('#flexSwitchCheckChecked').prop('checked', true);
	 		$("body").addClass("dark").removeClass("light");
	  }
	  else
	  canvas("#0d6efd");
		$(".mydiv").fadeOut();
	});

	$(".middle").click(function() {
		var addressValue = $(this).attr("aria-label");
		var expanded= $(".navbar-toggler").attr("aria-expanded");
		if(previousValue!=addressValue)	
		{
			$('.pages').hide();
			$(addressValue).fadeIn();
		}
		if(expanded=="true")
		$("#tooglenav").click();
		previousValue=addressValue;
	});

	  ['change'].forEach(e => window.matchMedia('(prefers-color-scheme: dark)').addEventListener(e, 	
		e => {
    		const newColorScheme = e.matches ? "dark" : "light";
    		$("body").removeClass("dark light");
    		if(newColorScheme=="dark")
    		{
    			canvas("#66FF66");
    			$('#flexSwitchCheckChecked').prop('checked', true);
    		}
    		else
    		{
    			canvas("#0d6efd");
    			$('#flexSwitchCheckChecked').prop('checked',false);
    		}
		}
	  ));

	$('#flexSwitchCheckChecked').click(function() {
		if($('#flexSwitchCheckChecked').is(":checked")) {
			canvas("#66FF66");
			$("body").addClass("dark").removeClass("light");
		}
		else
		{
			canvas("#0d6efd");
			$("body").addClass("light").removeClass("dark");
		}
	});
	});
