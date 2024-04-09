function runExample3() {
    $("#custom-places").mapsed({
		showOnLoad: 	
		[
			// City Varieties
			{
				// flag that this place should have the tooltip shown when the map is first loaded
				autoShow: true,
				// flags the user can edit this place
				lat: -22.8425897,
				lng:-43.2330598,
				name: "INNT",
				street: "Universidade Federal do Rio de Janeiro Av. Carlos Chagas 373, Bl. F,rm 1-31 CEP 21941-902 Rio de Janeiro",
				userData: 99
			},
			// Random made up CUSTOM place

		]
		
	});									
}


$(document).ready(function() {
	runExample3();
});


