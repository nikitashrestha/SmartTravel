/*finding the current self location */
var map, geocoder, infowindow, geocoder, current_location;
/*Geocoding here*/
function initialize()
{
    //alert("Inside initialize...");
    geocoder = new google.maps.Geocoder();
    var init_coord = {lat: 	27.7172453, lng: 85.3239605};
    map = new google.maps.Map(document.getElementById('map'), {zoom: 7, center: init_coord});

}

function initMap()
{
    var directionsService=new google.maps.DirectionsService();
    var directionsDisplay= new google.maps.DirectionsRenderer();
    var infoWindow =new google.maps.InfoWindow;

        // Try HTML5 geolocation.
        if (navigator.geolocation)
        {
            navigator.geolocation.getCurrentPosition(function(position)
             {
                var pos = {
                  lat: position.coords.latitude,
                  lng: position.coords.longitude
                };
            //alert("Finding self locations...");

            var marker = new google.maps.Marker({position: pos, map: map});
            infoWindow.setPosition(pos);
            infoWindow.setContent('Location found...');
            infoWindow.open(map);
            map.setCenter(pos);
            directionsDisplay.setMap(map);
            current_location={lat: pos.lat, lng: pos.lng};
            }
          ,
            function() {
             handleLocationError(true, infoWindow, map.getCenter());
            });
        }
        else
         {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.getCenter());
         }



        /* after rendering map, wait for events to trigger

        // for direction
        var onChangeHandler = function()
        {
          calculateAndDisplayRoute(directionsService, directionsDisplay, current_location);
        };*/

        //for places
        var places = function()
        {
          Search_Places(current_location);
        };

    //document.getElementById('button').addEventListener('click', onChangeHandler);
  //  document.getElementById('mode').addEventListener('change', onChangeHandler);
    //document.getElementById('search').addEventListener('click', codeAddress);
    document.getElementById('search').addEventListener('click', places);
  }

function handleLocationError(browserHasGeolocation, infoWindow, pos)
{
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
                          'Error: The Geolocation service failed.' :
                          'Error: Your browser doesn\'t support geolocation.');
    infoWindow.open(map);
}



/* According to mode selected finding the directions and displaying on map */
function calculateAndDisplayRoute(directionsService, directionsDisplay, d)
{
    var selectedMode=document.getElementById('mode').value;
      directionsService.route({
      origin: current_location,
      //origin: document.getElementById('start').value,
      //destination: document.getElementById('end').value,
      destination: d,
      travelMode: google.maps.TravelMode[selectedMode],
      //provideRouteAlternatives: 'True',

    }, function(response, status)
     {
      if (status === 'OK')
      {
        directionsDisplay.setDirections(response);
      }
      else
       {
        window.alert('Directions request failed due to ' + status);
      }
    });
}

/* geocode user address */
function codeAddress()
{
    alert(" ");
    var address = document.getElementById('id_address').value;
    geocoder.geocode( { 'address': address}, function(results, status) {
      if (status == 'OK') {
      alert("Inside codeaddress status is ok...");
        map.setCenter(results[0].geometry.location);
        var marker = new google.maps.Marker({
            map: map,
            position: results[0].geometry.location
        });
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });
}




/*
      function initMap()
      {
        var directionsService = new google.maps.DirectionsService;
        var directionsDisplay = new google.maps.DirectionsRenderer;
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 7,
          center: {lat:27.7172453, lng: 85.3239605}
        });
        directionsDisplay.setMap(map); /* display map
        directionsDisplay.setPanel(document.getElementById('right-panel'));// display panel of directions on right side of map

        /* float-panel is the choice panel for start-end properties in request for direction api
        var control = document.getElementById('floating-panel');
        control.style.display = 'block';
        map.controls[google.maps.ControlPosition.TOP_CENTER].push(control);


        var onChangeHandler = function()
        {
          calculateAndDisplayRoute(directionsService, directionsDisplay);
        };
        document.getElementById('button').addEventListener('click', onChangeHandler);
        document.getElementById('mode').addEventListener('change', onChangeHandler);
      }
*/




/* Directions here*/
function calcRoute(s, d)
{
      alert("Inside calc route");
      var start = s;
      var end = d;
      var request =
      {
        origin:start,
        destination:end,
        travelMode: 'DRIVING'
      };
      directionsService.route(request, function(response, status)
      {
        if (status == 'OK')
        {
            alert("direction service request resulted with status ok");

            directionsDisplay.setDirections(response);
         }
      });
 }
/* type a place and its search radius, also append url as '...&libraris=places..'*/
function Search_Places(current_location)
{
        var types='night_club';


*/
        //var pyrmont = {lat:27.6913597, lng:85.3166566};
        map = new google.maps.Map(document.getElementById('map'), {
          center: current_location,
          zoom: 9
        });

        infowindow = new google.maps.InfoWindow();
        var service = new google.maps.places.PlacesService(map);
        service.nearbySearch({
          location: current_location,
          radius: 7000,
          type:types ,
          //openNow:'True',

        }, callback);
}

function callback(results, status)
{
    var i;

    if (status === google.maps.places.PlacesServiceStatus.OK) {
    for ( i= 1; i < results.length; i++) {
    createMarker(results[i]);

    //calcRoute(current_location, results[i].geometry.location);
    /* results[i] returned as response*/
    /*destination to which the directions have to be traced*/
   // calculateAndDisplayRoute(directionsService, directionsDisplay, results[i].geometry.location );
  }
}
alert(i + " number of data....");

}

function createMarker(place)
{
    var placeLoc = place.geometry.location;
    var marker = new google.maps.Marker({
      map: map,
      position: place.geometry.location
    });

    google.maps.event.addListener(marker, 'click', function() {
      infowindow.setContent(place.name);
      infowindow.open(map, this);
    });
}

