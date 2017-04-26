 
// Initialize Firebase
var config = {
    apiKey: "AIzaSyBI86yYZXFL2YdYr1uhj1r3jgsL-rPWEX4",
    authDomain: "weddingplanner-20e92.firebaseapp.com",
    databaseURL: "https://weddingplanner-20e92.firebaseio.com",
    projectId: "weddingplanner-20e92",
    storageBucket: "weddingplanner-20e92.appspot.com",
    messagingSenderId: "521136236588"
};
firebase.initializeApp(config);

//connect to database
var database = firebase.database();

var visitorData = {
  };

$('#b2').on('keypress', function(e){
    visitorData.fname = $('#fname').val();
    visitorData.lname = $('#lname').val();
    visitorData.email = $('#email').val();
    visitorData.phoneno = $('#phoneno').val();       
    visitorData.message = $('#message').val();
    if(visitorData.fname === '' || visitorData.lname === '' || visitorData.email === '' || visitorData.phoneno === '' || visitorData.message == '')
    {
        $('#b2 p').html("Please fill all the fields").css('color', 'red').css('text-align', 'center').css('font-size', '1.2em');
        validatePhn();
        // validateName();
    }
    else
    {
        $('#submit').removeAttr('disabled').css('opacity', '1');
    }
});

$('#submit').on('click', function(e){
    e.preventDefault();   
    visitorData.fname = $('#fname').val();
    visitorData.lname = $('#lname').val();
    visitorData.email = $('#email').val();
    visitorData.phoneno = $('#phoneno').val();       
    visitorData.message = $('#message').val();
    
    var visitorsReference = database.ref('visitors');
        
    visitorsReference.push({visitorData});
    // $('#submit').removeAttr('disabled').css('opacity', '1');
    $('#b2 p').html("Your booking id is " + visitorData.fname+(Math.floor(Math.random() * 500) + 1)).css('color', 'blue').css('text-align', 'center').css('font-size', '2em');
    // $( "#b2" ).validate().resetForm();
}); 


var reviewInput = {
  };


$('#rsubmit').on('click', function(e){
    e.preventDefault();   
    reviewInput.review = $('#rev').val();
    var reviewsReference = database.ref('reviews');    
    reviewsReference.push({reviewInput});
    if ($('#rev').val() === "")
    {
        $('#review p').html("Please fill the review field").css('color', 'red').css('text-align', 'center').css('font-size', '1.2em').fadeIn();
    }
    else
    {
        $('#review p').html("Review Submitted").css('color', 'green').css('text-align', 'center').css('font-size', '1.2em').fadeOut(3000);
        $('#rev').val(''); 
    }
}); 

var validatePhn = function(){
    if($('#phoneno').val().length < 9)
        {
            $('#b2 p').html("Invalid Phone Number");
        }
        else
        {
            $('#b2 p').html("");
        }
}

// var validateName = function(){
//     visitorData.fname = $('#fname').val();
//     visitorData.lname = $('#lname').val();
//     if(visitorData.fname === '' || visitorData.lname === '')
//     {
//         $('#b2 p').html("Please fill the fields").fadeOut(2000);
//     }
//     else{
//         $('#b2 p').html("");
//     }
// }



      



