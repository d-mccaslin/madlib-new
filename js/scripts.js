$(document).ready(function() {
  $("#formOne").submit(function(event) {
    const person1Input = $("input#adjective1").val();
    const person2Input = $("input#adjective2").val();
    const typeOfFoodInput= $("input#typeOfFood").val();
    const roomOfhouseInput= $("input#roomOfHouse").val();
    const exclamationInput = $("input#exclamation").val();
    const verbInput = $("input#verb1").val();
    const verbInput = $("input#verb2").val();

    $(".adjective1").text(adjective1Input);
    $(".adjective2").text(adjective2Input);
    $(".typeOfFood").text(typeOfFoodInput);
    $(".roomOfHouse").text(roomOfHouseInput);
    $(".exclamation").text(exclamationInput);
    $(".verb1").text(verb1Input);
    $(".verb2").text(verb2Input);

    $("#story").show();

    event.preventDefault();
  });
});