
//'https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}'
//'https://api.mapbox.com/styles/v1/mapbox/outdoors-v11/tiles/{z}/{x}/{y}?access_token={accessToken}'
//'https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}'
//'https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}'
//'https://api.mapbox.com/styles/v1/mapbox/satellite-v9/tiles/{z}/{x}/{y}?access_token={accessToken}'
//'https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}'

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// We create the dark view tile layer that will be an option for our map.
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
	attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Create a base layer that holds both maps.
let baseMaps = {
	Streets: streets,
	SatelliteStreets: satelliteStreets
};

// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
    center: [43.7, -79.3],
    zoom: 11,
    layers: [streets]
});

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

// Accessing the airport GeoJSON URL
//let airportData = "https://raw.githubusercontent.com/bksuro/Mapping_Earthquakes/Mapping_GeoJSON_Points/majorAirports.json";
// Accessing the Toronto airline routes GeoJSON URL.
//let torontoData = "https://raw.githubusercontent.com/bksuro/Mapping_Earthquakes/Mapping_GeoJSON_Linestrings/torontoRoutes.json";
// Accessing the Toronto neighborhoods GeoJSON URL.
let torontoHoods = "https://raw.githubusercontent.com/bksuro/Mapping_Earthquakes/Mapping_GeoJSON_Polygons/torontoNeighborhoods.json";

// Create a style for the lines.
let myStyle = {
    color: "#0000ff",
    weight: 1,
	fillColor: 'yellow'
}

// Grabbing our GeoJSON data.
d3.json(torontoHoods).then(function(data) {
    console.log(data);
  // Creating a GeoJSON layer with the retrieved data.
  //L.geoJson(data).addTo(map);
  
  L.geoJson(data, {
	  style: myStyle,
	  onEachFeature: function(feature, layer) {
		  //console.log(layer);
		  layer.bindPopup("<h3> Neighborhood: " + feature.properties.AREA_NAME + "</h3>");
		  }
	}).addTo(map);
	
});


