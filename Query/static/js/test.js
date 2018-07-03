
/*var map, marker, geocoder;

function Initialize()
{
    var init_coord={lat: 27.6828417, lng: 85.3200053}; // pulchowk ko coordinate
    var map_properties={
        center: init_coord,
        zoom:11,
    };
    map= new google.maps.Map(document.getElementById('map'), map_properties);
    //geocoder=new google.maps.Geocoder();
}

function MyMap()
{
    alert("Inside My Map");
    var init_coord={lat: 27.6828417, lng: 85.3200053}; // pulchowk ko coordinate
    var map_properties={
        center: init_coord,
        zoom:11,
    };
    var map= new google.maps.Map(document.getElementById('map'), map_properties);
    var marker = new google.maps.Marker({position: init_coord, map: map});
}

 function DisplayInMap()
 {
    alert("hey you are inside Geocoding.. ");
    var input=document.getElementById('id_address').value;
    geocoder.geocode({'address': input}, function(results, status){
    if(status=='OK')
    {
        map.setCenter(results[0].geometry.location);
        marker= new google.maps.Marker(
        {
            map: map,
            position: results[0].geometry.location
        });
        else
        {
            alert('geocode Unsuccessful.');
        }
    }
    });
 }


var input;
$("#id_address").on('change', function (event )
{
      console.log( $(this).val());
      input=$(this).val();
      alert("you changed the address field value in the form");
      $('#form').on('submit', function(event)
      {
          alert("Guess what! You are submitting a form.  "+ input);
          event.preventDefault();
          console.log("form submitted!"); //sanity check
          Create_post(input);
      });
});
*/

document.getElementById('id_address').addEventListener('change', function()
{
    var input=$('#id_address').val();
    $('#form').on('submit', function(event)
      {
          alert("Guess what! You are submitting a form.  "+ input);
          event.preventDefault();
          console.log("form submitted!"); //sanity check
          Create_post(input);
      });
});
/*
$('#button').on('click', function(event){
      window.alert("Guess what you submitted the form.  "+ input);
      event.preventDefault();
      console.log("form submitted!"); //sanity check
      DisplayInMap(input);
    //  Create_post(input);
      });

*/

// AJAX for posting
function Create_post(input)
{
    console.log("create post is working!") // sanity check
    //var fd = new FormData($("#form")[0]); //easily serialize data
    window.alert("Inside create_post function with address: "+ input);

    $.ajax({
    url: "/query/createpost/",
    type: "POST",
    data:
    {
        address: input,
        csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val()
    },

     //handle successful response
     success : function(json)
     {
        alert("Success returned... ");
        $('#id_address').val(''); // remove the value from the input
        console.log(json); // log the returned json to the console
        console.log("success"); // another sanity check

        $('#results').html("<div class='alert-box alert radius' data-alert>This is great <a href='#' class='close'>&times;</a></div>"); // add the error to the dom
      },

        // handle a non successful response
        error : function(xhr,errmsg,err)
        {
            alert("You did a blunder and got no success: ");
            $('#results').html("<div class='alert-box alert radius' data-alert>Oops! We have encountered an error: "+errmsg+
                    " <button href='#' class='close'>&times;</button></div>"); // add the error to the dom
            console.log(xhr.status + ": " + xhr.responseText); // provide a bit more info about the error to the console
        }
      });
}

/*


 document.getElementById('button').addEventListerner('click', function(){
            var address="Jhapa";
            document.alert("hey you are inside Geocode "+ address);
            var geocoder= new google.maps.Geocoder();
            geocoder.geocode({'address': address}, function(results, status){
            if(status=='OK')
            {
                map.setCenter(results[0].geometry.location);
                var marker= new google.maps.Marker(
                {
                    map: map,
                    zoom:7,
                    position: results[0].geometry.location
                });
            }
                else
                {
                    alert('geocode Unsuccessful.');
                }
            });
    });*/