// Use this file for the exercise


$(document).ready(function(){
   $('#p02').append('<br>This is line #2.');
    

 for (var i = 3; i < 10; i++) { 
  text = "<br>" + "This is line #" + i ;
  $('#p02').append(text);
 }
    
$('#map').removeClass('flatBox');
$('#map').addClass('sizeM');

$('#btns2').append(' <button><h1>New Btn</h1></button>');
    
    }); // end of ready event
