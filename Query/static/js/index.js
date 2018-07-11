/*variables */
var map, geocoder, infowindow, geocoder, current_location;

var directionsService;
var directionsDisplay;

/*on load*/
function initialize(){
    directionsService=new google.maps.DirectionsService();
    directionsDisplay= new google.maps.DirectionsRenderer();
    geocoder = new google.maps.Geocoder();
    infoWindow =new google.maps.InfoWindow;
    map = new google.maps.Map(document.getElementById('map'), {zoom: 13});
}

function initMap(){

        //Get current location of your device
        if (navigator.geolocation)
        {
            navigator.geolocation.getCurrentPosition(function(position)
             {
                var pos =
                {
                  lat: position.coords.latitude,
                  lng: position.coords.longitude,
                };
                var marker = new google.maps.Marker({
                position: pos,
                map: map,
                label:'I',
                });

                directionsDisplay.setMap(map); //bind map with direction display
                current_location={lat: pos.lat, lng: pos.lng};// store current location value in a var
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

        /* after rendering map, wait for events to trigger*/
  //for places
   var Place = function()
    {
        Search_Places(current_location);
    };
    document.getElementById('category').addEventListener('change', Place);  

 }



function handleLocationError(browserHasGeolocation, infoWindow, pos){
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
                          'Error: The Geolocation service failed.' :
                          'Error: Your browser doesn\'t support geolocation.');
    infoWindow.open(map);
}



/* current location ko warpara ko places find and mark garne */
function Search_Places(current_location)
{
        alert("inside Search Places");
        var selectedMode=document.getElementById('category').value;
        map.setCenter(current_location);
        infowindow = new google.maps.InfoWindow();
        var service = new google.maps.places.PlacesService(map);
        service.nearbySearch({
          location: current_location,
          radius: 7000,
          type: selectedMode,
          }, callback);
}

function callback(results, status)
{
    var i;
    if (status === google.maps.places.PlacesServiceStatus.OK)
    {
        for ( i= 1; i < results.length; i++)
        {

            createMarker(results[i]);
        }
    }
    map.setZoom(13);
    alert(i + " number of data....");
}


function createMarker(place)
{
    var placeLoc = place.geometry.location;
    var marker = new google.maps.Marker({ // this is local var marker, add it to markers array as global
      map: map,
      position: place.geometry.location
    });

    /* Find direction between start and destination */
    google.maps.event.addListener(marker, 'click', function()
    {
        infoWindow.setPosition(marker);
        infoWindow.setContent('You are here...');
        infoWindow.open(map);
        direction();
        
    });
    var direction =function(){
      calculateAndDisplayRoute(directionsService, directionsDisplay, current_location, placeLoc);
    }
    document.getElementById('mode').addEventListener('change', direction);
}



/* According to mode selected, find the directions and displaying on map */
/* Direction shown based on request made and respose got*/
function calculateAndDisplayRoute(directionsService, directionsDisplay, f, t){
    var selectedMode=document.getElementById('mode').value;
      directionsService.route({
      origin: f,
      destination: t,
      travelMode: google.maps.TravelMode[selectedMode],
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
function codeAddress(){

    var address = document.getElementById('geocode_address').value;
    alert(address);
    geocoder.geocode( { 'address': address}, function(results, status) {
      if (status == 'OK') {
     // alert("Inside codeaddress status is ok...");
        map.setCenter(results[0].geometry.location);
        map.setZoom(14);
        var marker = new google.maps.Marker({
            map: map,
            position: results[0].geometry.location
        });
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });
}