var geocoder; // convert geoaddress into latlng code
var map;
var address=document.getElementById('id_address').value;
var geocoder;
function MyMap()
{
    var init_coord={lat: 27.6828417, lng: 85.3200053};
    map_properties={
        center: init_coord,
        zoom:14,
    };
<<<<<<< HEAD
    map= new google.maps.Map(document.getElementById('map'), map_properties);
    var marker = new google.maps.Marker({position: init_coord, map: map});
}
function Initialize()
{
    geocoder=new google.maps.Geocoder();
    document.getElementById("submit").addEventListener('click', Geocode());
=======
    var map= new google.maps.Map(document.getElementById('map'), map_properties);

    var marker = new google.maps.Marker({
        position: init_coord,
        map: map,
        animation: google.maps.Animation.Drop,
        draggable: true,
    });
    //marker.setMap(map);

    var currentLocationCirle = new google.maps.Circle({
        center: init_coord,
        radius: 500,
        strokeColor: "#B42424",
        strokeOpacity: 0.5,
        //strokeWeight: 2,
        fillColor: '#B42424',
        fillOpacity: 0.6
    });
    currentLocationCirle.setMap(map);


    //Informationn Window
    var infoWindow = new google.maps.InfoWindow({
        content: "This is your current location",
        maxWidth: 80,
    });
    infoWindow.open(map, marker);

    //Event Listener
    //Zooms when clicked on marker
    google.maps.event.addListener(marker, 'click', function() {
       //map.setZoom(map.getZoom() + 5);
        map.setZoom(16);
        map.setCenter(marker.getPosition());
    });

    //Info when clicked--
    var clickedInfo = new google.maps.InfoWindow({
        content: "You clicked on the marker!!",
        setWidth: 50,
    });
    google.maps.event.addListener(marker, 'click', function() {
        clickedInfo.open(map, marker);
    });


    //Click to add marker
    google.maps.event.addListener(map, 'click', function(event) {
        var newMarker = new google.maps.Marker({
            position: event.latLng,
            map: map
        });
    });
>>>>>>> 981ebf1d0071791c2da699f83e2d563800f7169c

}

function Geocode()
{
    document.alert("hey you are inside Geocode ");
    geocoder.geocode({'address': address}, function(results, status){
    if(status=='OK')
    {
        map.setCenter(results[0].geometry.location);
        var marker= new google.maps.Marker(
        {
            map: map;
            position: results[0].geometry.location
        });
        else
        {
            alert('geocode Unsuccessful.');
        }
    }
    });
}*/