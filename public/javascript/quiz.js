$('form').submit(function(e){
  e.preventDefault();
  //validate form
  let is_valid = true;
    $('input[type=text]').each(function() {
      if ($(this).val() === "") {
        is_valid = false;
        $(this).prev().css('color', 'red');
      }
    });
    $('select option:selected').each(function() {
      if ($(this).text() === "-") {
        is_valid = false;
       $(this).parent().css('border-color', 'red');
      }
    });
    //end form validation
    
    var form_data = {
        name: $("#fname").val(),
        photo: $("#headshot").val(),
        scores: [
          $("#question1").val(),
          $("#question2").val(),
          $("#question3").val(),
          $("#question4").val(),
          $("#question5").val(),
          $("#question6").val(),
          $("#question7").val(),
          $("#question8").val(),
          $("#question9").val(),
          $("#question10").val()
        ]
      };
    
  $('input[type=submit]').attr('value', 'Loading...').attr('disabled', 'disabled');
  if(is_valid){
  $.post("/api/friends", form_data, function(data, err) {
        if(err) console.log('error')
        return;
        //evaluate and display match here
     });
   } else {
     alert('Oops! Please make sure you enter a valid name and image URL.')
   }
});

  