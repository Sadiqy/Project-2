'use strict';

document.addEventListener('DOMContentLoaded', function () {

  // Login Info
  $("#signinBtn").on("click", function () {
    console.log("was clicked");

    let userEmailInput = $(".emailInput").val();
    console.log(userEmailInput);
    let queryURL = ("users/" + userEmailInput)
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
      console.log(response);
    });

    let userPassInput = $(".passwordInput").val();
    console.log(userPassInput);
    let querypassURL = ("api/users/" + userPassInput)
    $.ajax({
      url: querypassURL,
      method: "GET"
    }).then(function (response) {
      console.log(response);
    });
  });

  //Signup Info
  $("#signupBtn").on("click", function () {
    console.log("was clicked");

    let userEmailInput = $(".newemailInput").val();
    let userNameInput = $(".nameInput").val();
    let sendData = {full_name: userNameInput, email: userEmailInput};
    
    let queryURL = ("api/users")
    
    $.ajax({
      url: queryURL,
      method: "POST",
      data: sendData
    }).then(function (response) {
      console.log(response);
    });

  });

//Question Answers Posting
$(".fgDD").click(function () {
  $(".fgDD").addClass("is-active");
});

let $span = $("#fitnessgoal")

$(".dropdown-item").click(function (event) {
  event.stopPropagation();
  const value = $(this).data("value");
  $span.text(value);
  $(".fgDD").removeClass("is-active");
});

$("#matchBtn").on("click", function () {
  console.log("was clicked");

  let userZIPCode = $(".zipcode").val();
  let updateData = {fitness_goal: $span, zipcode: userZIPCode}
  let queryURLgoals = ("api/users/:email")
  $.ajax({
    url: queryURLgoals,
    method: "PUT",
    data: updateData
  }).then(function (response) {
    console.log(response);
  });
});



  // Profile Modal on click
  $(".view-profile").click(function () {
    $(".modal").addClass("is-active");
  });

  $(".delete").click(function () {
    $(".modal").removeClass("is-active");
  });

  