$( document ).ready(function() {

	var testEl = document.createElement( "x-test" );
	var supportsWebkitBackgroundClipText = typeof testEl.style.webkitBackgroundClip !== "undefined" && ( testEl.style.webkitBackgroundClip = "text", testEl.style.webkitBackgroundClip === "text" );

	if ( (supportsWebkitBackgroundClipText === true) )
		$("html").addClass("backgroundclip");
	else
		$("html").addClass("no-backgroundclip");

});