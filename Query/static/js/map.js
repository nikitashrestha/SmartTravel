function MyMap()
{
    var map_properties={
        center: new google.maps.LatLng(51.508742,-0.120850),
        zoom:13,
    };
    var map= new google.maps.Map(document.getElementById('map'), map_properties);
    document.getElementById('check').innerHTML="Map ";
}
