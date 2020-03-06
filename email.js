button class = emailinput

$("#emailinput").on("click", function () {
    console.log("was clicked");
  
    let userInput = $("#address").val();
    console.log(userInput);
    let queryURL = ("users" + userInput)
    $.ajax({
      url: queryURL, ""
      method: "GET"
    }).then(function (response) {
      
      console.log();
      