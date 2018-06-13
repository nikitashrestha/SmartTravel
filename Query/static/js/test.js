var input;
$("#id_address").change(function () {
      console.log( $(this).val() );
      input=$(this).val();
      window.alert("you changed the address field value in the form");
      $('#form').on('submit', function(event){
      window.alert("Guess what you submitted the form.  "+ input);
      event.preventDefault();
      console.log("form submitted!"); //sanity check
      Create_post(input);
      });
});


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
     success : function(json) {
     alert("You did great: ");
            $('#id_address').val(''); // remove the value from the input
            console.log(json); // log the returned json to the console
            console.log("success"); // another sanity check
        },

     // handle a non successful response
        error : function(xhr,errmsg,err) {
        alert("You did blunder and so got no success: ");
            $('#results').html("<div class='alert-box alert radius' data-alert>Oops! We have encountered an error: "+errmsg+
                " <a href='#' class='close'>&times;</a></div>"); // add the error to the dom
            console.log(xhr.status + ": " + xhr.responseText); // provide a bit more info about the error to the console
        }
      });
}


