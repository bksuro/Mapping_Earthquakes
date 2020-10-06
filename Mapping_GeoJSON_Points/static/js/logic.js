
// Create the map object with center at the San Francisco airport.
let map = L.map('mapid').setView([37.62, -122.375], 11);

//'https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}'
//'https://api.mapbox.com/styles/v1/mapbox/outdoors-v11/tiles/{z}/{x}/{y}?access_token={accessToken}'
//'https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}'
//'https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}'
//'https://api.mapbox.com/styles/v1/mapbox/satellite-v9/tiles/{z}/{x}/{y}?access_token={accessToken}'
//'https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}'

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/outdoors-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

// Add GeoJSON data.
let sanFranAirport =
{"type":"FeatureCollection","features":[{
    "type":"Feature",
    "properties":{
        "id":"3469",
        "name":"San Francisco International Airport",
        "city":"San Francisco",
        "country":"United States",
        "faa":"SFO",
        "icao":"KSFO",
        "alt":"13",
        "tz-offset":"-8",
        "dst":"A",
        "tz":"America/Los_Angeles"},
        "geometry":{
            "type":"Point",
            "coordinates":[-122.375,37.61899948120117]}}
]};

// Grabbing our GeoJSON data.

//L.geoJSON(sanFranAirport).addTo(map);

//L.geoJson(sanFranAirport, {
//	// We turn each feature into a marker on the map.
//	pointToLayer: function(feature, latlng) {
//		console.log(feature);
//		return L.marker(latlng)
//		.bindPopup("<h3>" + feature.properties.name + "</h3>" + "<hr><h4>" + feature.properties.city + ", " + feature.properties.country + "</h4>");
//	}
//}).addTo(map);

L.geoJson(sanFranAirport, {
	onEachFeature: function(feature, layer) {
		console.log(layer);
		layer.bindPopup("<h3> Airport code: " + feature.properties.faa + "</h3>" + "<hr><h4>Airport name: " + feature.properties.name + "</h4>");
	}
}).addTo(map);



