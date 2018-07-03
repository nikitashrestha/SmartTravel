/*Also finding the current self location */

var map, geocoder, infowindow;
/*
function initMap()
{
    var directionsService=new google.maps.DirectionsService();
    var directionsDisplay= new google.maps.DirectionsRenderer();


        var init_coord = {lat: 	27.7172453, lng: 85.3239605};
        map = new google.maps.Map(document.getElementById('map'), {zoom: 7, center: init_coord});

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
            alert("Finding self locations...");
            var marker = new google.maps.Marker({position: pos, map: map});
           /* infoWindow.setPosition(pos);
            infoWindow.setContent('Location found...');
            infoWindow.open(map);
            map.setCenter(pos);
            directionsDisplay.setMap(map);
            directionsDisplay.setPanel(document.getElementById('directionsPanel'));
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
      }

      function handleLocationError(browserHasGeolocation, infoWindow, pos)
      {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');
        infoWindow.open(map);
      }*/

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

      function calculateAndDisplayRoute(directionsService, directionsDisplay)
      {
        var selectedMode=document.getElementById('mode').value;
        directionsService.route({
          origin: document.getElementById('start').value,
          destination: document.getElementById('end').value,
          travelMode: google.maps.TravelMode[selectedMode],
          provideRouteAlternatives: true,

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

*/
/*Geocoding here
function initialize()
{
    alert("Inside initialize...");
    geocoder = new google.maps.Geocoder();
    var latlng = new google.maps.LatLng(27.7172453, 85.3239605);
    var mapOptions = {
      zoom: 12,
      center: latlng
    }
    //map = new google.maps.Map(document.getElementById('map'), mapOptions);
}

function codeAddress()
{
    alert("Inside codeaddress...");
    var address = document.getElementById('address').value;
    geocoder.geocode( { 'address': address}, function(results, status) {
      if (status == 'OK') {
        map.setCenter(results[0].geometry.location);
        var marker = new google.maps.Marker({
            map: map,
            position: results[0].geometry.location
        });
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });
}*/

/* Directions here
function Direction()
{
    var str=document.getElementById("addresses").value;
    var res=str.split(",", 2);
    alert("First is: "+ res[0]+ " "+ "Second is: "+ res[1]);
    //res[0] being the origin and res[1] is the destination
    calcRoute(res[0], res[1]);
}
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
*/

/* type a place and its search radius, also append url as '...&libraris=places..'
function initMap()
{
        var pyrmont = {lat:26.7927053, lng:87.2919325};

        map = new google.maps.Map(document.getElementById('map'), {
          center: pyrmont,
          zoom: 7
        });

        infowindow = new google.maps.InfoWindow();
        var service = new google.maps.places.PlacesService(map);
        service.nearbySearch({
          location: pyrmont,
          radius: 1000,
          type: ['store']
        }, callback);
      }

      function callback(results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          for (var i = 0; i < results.length; i++) {
            createMarker(results[i]);
          }
        }
      }

function createMarker(place) {
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
*/
