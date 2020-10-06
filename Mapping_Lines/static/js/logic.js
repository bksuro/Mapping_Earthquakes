// Add console.log to check to see if our code is working.
//console.log("working");

// Create the map object with a center and zoom level.
//let map = L.map('mapid').setView([40.7, -94.5], 4);
//let map = L.map('mapid').setView([37.6213, -122.3790], 5);
let map = L.map('mapid').setView([30.1975, -97.6664], 5);
//let map = L.map('mapid').setView([34.0522, -118.2437], 14);

// We create the tile layer that will be the background of our map.
//'https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}'
//'https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}'
//'https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}'
//'https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}'
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

// Get data from cities.js
//let cityData = cities;
//
// Loop through the cities array and create one marker for each city.
//cityData.forEach(function(city) {
//	console.log(city);
//	L.circleMarker(city.location, {
//		radius: city.population/100000,
//		color: '#ffa500',
//		weight: 4
//	    })
//	    .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
//		.addTo(map);
//});
//L.marker(city.location)
//	    .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
//	    .addTo(map);
//  Add a marker to the map for Los Angeles, California.
// let marker = L.marker([34.0522, -118.2437]).addTo(map);

// Coordinates for each point to be used in the line.
//let line = [
//  [33.9416, -118.4085],
//  [37.6213, -122.3790],
//  [40.7899, -111.9791],
//  [47.4502, -122.3088]
//];

let line = [
  [37.6213, -122.3790],
  [39.8561, -104.6737],
  [30.1975, -97.6664],
  [43.6532, -79.3832],
  [40.6413, -73.7781]
];


// Create a polyline using the line coordinates and make the line red.
L.polyline(line, {
  color: "blue",
  weight: 4,
  opacity: 0.5,
  dashArray: '5,10'
}).addTo(map);




