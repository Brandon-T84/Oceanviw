

var map;

function initMap() {


var place = "food near"
    // Create map
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 30.266666, lng: -97.733330},
        zoom: 8
    });

    // Reset the value of the search box
    document.getElementById('search').value = '';
    console.log(document.getElementById('search').value)

    var input = document.getElementById('search');

    // Create new searchbox constructor
    var searchName = new google.maps.places.SearchBox(input);

    // Set search to stay within bounds first
    map.addListener('bounds_changed', function() {
        searchName.setBounds(map.getBounds());
    })

    // Array to hold search options
    var markers = [];

    // When user selects prediction from list
    searchName.addListener('places_changed', function() {
        
        // Var to get places
        var places = searchName.getPlaces();

        // If no places then just return (do nothing)
        if (places.length === 0) {
            return;
        }

        // Clear previous markers
        markers.forEach(function (m) { m.setMap(null); });

        // Reset markers array
        markers = [];

        // bounds object
        var bounds = new google.maps.LatLngBounds();

        places.forEach(function (p) {
            // If no data then just return (do nothing)
            if (!p.geometry) {
                return;
            }

            // push marker with data
            markers.push(new google.maps.Marker({
                map: map,
                title: p.title,
                position: p.geometry.location
            }));

            if (p.geometry.viewport) {
                bounds.union(p.geometry.viewport);
            } else {
                bounds.extend(p.geometry.location);
            }
        });
        map.fitBounds(bounds);
    });
}

