 
// Image Carousal
var index = 0;
imgCarousel();

function imgCarousel() {
    var i;
    var x = $('#imgslides').children('.image');
    for (i = 0; i < x.length; i++) 
    {
       x[i].style.display = "none";  
    }
    index++;
    if (index > x.length) 
        {
            index = 1
        }    
    x[index-1].style.display = "block";  
    setTimeout(imgCarousel, 3000);    
}

// Appointment Booking
$('#book-now').on('click', function(e){
    e.preventDefault();
    $('#showup').show();
    // $('#wrapper').hide();
    return false;
});

//Appointment Booking close
$('#close').on('click', function(e){
    e.preventDefault();
    $('#showup').hide();
    $('#wrapper').show();
    return false;
});

$('#cancel').on('click', function(){
    $('#fname').val('');
    $('#lname').val('');
    $('#email').val('');
    $('#phoneno').val('');
    $('#message').val('');
    $('#b2').find('p').html('Please fill all the fields').remove();
});

$('#submit').attr('disabled', 'disabled').css('opacity', '0.5');

$( "#b2" ).validate({
  rules: {
    field: {
      required: true,
      email: true
    }
  }
});

$( "#b2" ).validate({
  rules: {
    field: {
      required: true,
      phoneUS: true
    }
  }
});



