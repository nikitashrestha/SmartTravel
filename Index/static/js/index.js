/*$('#submit_user').on('click', function(event){
        alert("Object created...");
       var person = {
        Name: document.getElementById('user_name'),
        Address : document.getElementById('user_addr'),
        Phone= :document.getElementById('user_contact'),
        DOB: document.getElementById('user_dob'),
        Gmail: document.getElementById('user_gmail'),
        Nationality:document.getElementById('user_nationality') ,
        Fav_Quote:document.getElementById('user_fav_quote'),
        Password: document.getElementById('user_pw'),
        Re_Password: document.getElementById('user_repw'),
        Content: function() {
        return this.Name + " lives in " + this.Address+"with gmail id: "+ Gmail;
        }
      };
      event.preventDefault();

      //Submit_SignUp(person);
      });
*/
function Show()
 {
    alert("Inside show...");
    var word="Smart Travel";
    var length=word.length;
    var i=0;
    var temp="";
    var show=setInterval(function(){
      if(length>i)
      {
        temp=(temp+word.substring(i, (i+1)));
        document.getElementById("slide").innerHTML=temp;
        i=i+1;
      }
      else
      {
      alert("Inside else ..");
        temp="";
        document.getElementById("slide").innerHTML= "...";
        i=0;
      }
    }, 177);
 }




/* AJAX for posting
function Submit_SignUp(user)
{
    alert("Submittting to the backend...");
    $.ajax({
    url: "/index/submit/",
    type: "POST",
    data:
    {
        data: user,
        csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val()
    },

     //handle successful response
     success : function(json) {
     alert("Success returned... ");
            $('#id_address').val(''); // remove the value from the input
            console.log(json); // log the returned json to the console
            console.log("success"); // another sanity check

           $('#results').html("<div class='alert-box alert radius' data-alert>This is great <a href='#' class='close'>&times;</a></div>"); // add the error to the dom
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



      $('#submitd_user').on('click', function(event){
      alert();
      var person = {
        Name: document.getElementById('user_name'),
        Address : document.getElementById('user_addr'),
        Phone= :document.getElementById('user_contact'),
        DOB: document.getElementById('user_dob'),
        Gmail: document.getElementById('user_gmail'),
        Nationality:document.getElementById('user_nationality') ,
        Fav_Quote:document.getElementById('user_fav_quote'),
        Password: document.getElementById('user_pw'),
        Re_Password: document.getElementById('user_repw'),
        Content: function() {
        return this.Name + " lives in " + this.Address+"with gmail id: "+ Gmail;
        }
      };
      event.preventDefault();
      alert("Object created...");
      //Submit_SignUp(person);
      });
      */