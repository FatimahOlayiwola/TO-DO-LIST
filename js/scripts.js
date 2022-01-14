$(document).ready(function() {
  $("#form").submit(function(event){
    event.preventDefault();

    const AGENDA = $("#agenda").val();
    const DESCRIPTION = $("#description").val();
    const DATE= $("#date").val();

    $("#list").append("<li>" + AGENDA +"</li>");
    $("#list").append("<li>" + DESCRIPTION +"</li>");
    $("#list").append("<li>" + DATE +"</li>");


    $("#output").show();

  });
});