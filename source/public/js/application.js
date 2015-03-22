$(document).ready(function() {

  $.ajax({
    url: "http://localhost:3000/questions",
    type: 'GET',
  }).done(function(response) {
    console.log(response);
    var context = {questions: response.questions,
                   quote: response.quote}
    var html = $('#questions_list_template').html();
    var templatingFunction = Handlebars.compile(html);
    $('.questions-list').append(templatingFunction(context));
    $('.quote').append('<p>'+context.quote+'</p>');
  })

});
