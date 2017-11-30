$(document).ready(function() {

    $("#animalName").change(function(event) {
      var animal = $("#animalName").val();
      if(animal === "Turtles"){
        $(".animalName-title").text(animal);
        $("#aboutAnimals").hide();
        $("#dogs").hide();
        $("#lions").hide();
        $("#turtles").show();
      } else if(animal === "Dogs"){
        $(".animalName-title").text(animal);
        $("#aboutAnimals").hide();
        $("#turtles").hide();
        $("#lions").hide();
        $("#dogs").show();
      } else if(animal === "Lions") {
        $(".animalName-title").text(animal);
        $("#aboutAnimals").hide();
        $("#dogs").hide();
        $("#turtles").hide();
        $("#lions").show();
      }
      else {
        $(".animalName-title").text(animal);
        $("#dogs").hide();
        $("#lions").hide();
        $("#turtles").hide();
        $("#aboutAnimals").show();
      }

      event.preventDefault();
  });
});
