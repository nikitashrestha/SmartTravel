function MyMap()
{
    var init_coord={lat: 27.6828417, lng: 85.3200053};
    var map_properties={
        center: init_coord,
        zoom:14,
    };
    var map= new google.maps.Map(document.getElementById('map'), map_properties);
    var marker = new google.maps.Marker({position: init_coord, map: map});

}
