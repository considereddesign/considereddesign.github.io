$(document).ready(function()    {
	mediumZoom("#zoom-default");
	mediumZoom("#zoom-margin", {
	  margin: 48
	});
	mediumZoom("#zoom-background", {
	  background: "#131711"
	});
	mediumZoom("#zoom-scrollOffset", {
	  scrollOffset: 0
	});
	mediumZoom("#zoom-metaClick", {
	  metaClick: false
	});
	mediumZoom("[data-zoom]");

	var zoomToTrigger = mediumZoom("#zoom-trigger");
	var button = document.querySelector("#btn-trigger");
	button.addEventListener("click", function() {
	  zoomToTrigger.show();
	});

	var zoomToDetach = mediumZoom("#zoom-detach");
	zoomToDetach.addEventListeners("hidden", zoomToDetach.detach);
});