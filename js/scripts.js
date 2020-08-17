$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    // const person1Input = $("input#person1").val();
    // const person2Input = $("input#person2").val();
    // const animalInput= $("input#animal").val();
    // const exclamationInput = $("input#exclamation").val();
    // const verbInput = $("input#verb").val();
    // const nounInput = $("input#noun").val();

    // $(".person1").append(person1Input);
    // $(".person2").append(person2Input);
    // $(".animal").append(animalInput);
    // $(".exclamation").append(exclamationInput);
    // $(".verb").append(verbInput);
    // $(".noun").append(nounInput);

    const adjective1Input = $("input#adjective1").val();
    const adjective2Input = $("input#adjective2").val();
    const typeOfFoodInput = $("input#typeOfFood").val();
    const roomOfHouseInput = $("input#roomOfHouse").val();
    const exclamationInput = $("input#exclamation").val();
    const verb1Input = $("input#verb1").val();
    const verb2Input = $("input#verb2").val();

    $(".adjective1").text(adjective1Input);
    $(".adjective2").text(adjective2Input);
    $(".typeOfFood").text(typeOfFoodInput);
    $(".roomOfHouse").text(roomOfHouseInput);
    $(".exclamation").text(exclamationInput);
    $(".verb1").text(verb1Input);
    $(".verb2").text(verb2Input);

    $("#story").show();

    
  });
});