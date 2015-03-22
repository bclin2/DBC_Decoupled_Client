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

  $('.submit_question').on('click', function(event) {
    event.preventDefault();
    question_title = $(this).parent().find("input[name*='question_title']").val();
    question_content = $(this).parent().find("textarea[name*='question_content']").val();

    $.ajax({
      url: "http://localhost:3000/questions",
      type: 'POST',

      data: {question: {title: question_title, content: question_content}}
    }).done(function(response) {
      console.log("WE DID IT");
      console.log(response);
    })
  });

});
