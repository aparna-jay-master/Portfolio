var googleMap = '<div id="map"></div>';

var HTMLrowStart = function(number) {
	return '<div class="row location-row-' + number + '"></div>';
}

var HTMLitemStart = '<div class="col-md-4"></div>';
var HTMLimageUrl = '<img class="img-responsive image-margin" src="%data%"';
var HTMLimageAlt = ' alt="%data%">';
var HTMLlocationName = '<h3 class="main-color">%data%</h3>';
var HTMLlocationDate = '<p class="sub-color italics">%data%</p>';

function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 2,
        center: {lat: 23.0, lng: 15} ,
    });
    
    function locationFinder() {

        // initializes an empty array
        var placesVisited = [];
        var length = travels.locations.length;

        // iterates through locations and appends each location to
        // the locations array. Note that forEach is used for array iteration
        for (i = 0; i < length; i++) {
            var place = travels.locations[i].location;
            placesVisited.push(place);
        };

        return placesVisited;
    }

    var locations = locationFinder();

    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
        position: location,
        map: map
        });
    });
}

// Calls the initializeMap() function when the page loads
window.addEventListener('load', initMap);