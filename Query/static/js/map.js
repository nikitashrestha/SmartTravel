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
    map= new google.maps.Map(document.getElementById('map'), map_properties);
    var marker = new google.maps.Marker({position: init_coord, map: map});
}
function Initialize()
{
    geocoder=new google.maps.Geocoder();
    document.getElementById("submit").addEventListener('click', Geocode());

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