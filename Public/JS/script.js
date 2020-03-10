'use strict';

document.addEventListener('DOMContentLoaded', function () {
  console.log('JS LOADED')
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
    
    fetch(queryURL, {
      method: "POST",
      headers:{
        "Content-type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(sendData),
    }).then(res=> res.json())
    .then(data => {
      console.log("Success", data);
      window.location.href = '/questions'+data.redirect
    })

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
  console.log("was clicked, fucker");
  let value = $span.text()
  let userEmailInput = $("#userEmail").text().trim()
  let userZIPCode = $(".zipcode").val();
  let updateData = {fitness_goal: value, zipcode: userZIPCode, email: userEmailInput }
  let queryURLgoals = ("/api/users/")
  fetch(queryURLgoals, {
      method: "PUT",
      headers:{
        "Content-type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(updateData),
    }).then(res=> res.json())
    .then(data => {
      console.log("Success", data);
      window.location.href = '/matches/' + userEmailInput;
    })

  // $.ajax({
  //   url: queryURLgoals,
  //   method: "PUT",
  //   data: updateData
  // }).then(function (data) {
  //   console.log(data)
  //   window.location.href = ('/matches'+ data.redirect)
  // });
});



  // Profile Modal on click
  $(".view-profile").click(function () {
    $(".modal").addClass("is-active");
  });

  $(".delete").click(function () {
    $(".modal").removeClass("is-active");
  });

});