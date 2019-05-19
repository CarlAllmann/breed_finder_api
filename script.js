'use strict'

$(function() {
$(".welcome").show(); 
$(".search").hide(); 
$(".results").hide();
 
console.log('App loaded! Waiting for submit!');

$("#start").click(function(){
  $(".welcome").hide(); 
  $(".search").show();  
  console.log("start clicked"); 
})

$("#go-search").click(function(){
$(".welcome").hide(); 
$(".search").hide();
$(".results").show(); 
// watchForm();
console.log("go button clicked"); 
})

$("#restart-button").click(function(event) {
  $(".welcome").hide(); 
  $(".search").show(); 
  $(".results").hide();
  $(".dog-selector").prop("selectedIndex", 0);
  console.log("re-started"); 
  
})


$("#dog-form").submit(event => {
  event.preventDefault();
  event.stopImmediatePropagation();
  let dogBreed = $(".dog-selector").val();
  getImage(dogBreed);
  console.log("input sent");
  });
  return false;

});

// $("#start").click(function(){
//     $(".welcome").hide(); 
//     $(".search").show();  
//     console.log("start clicked"); 
// })

// $("#go-search").click(function(){
//   $(".welcome").hide(); 
//   $(".search").hide();
//   $(".results").show(); 
//   // watchForm();
//   console.log("go button clicked"); 
// })

// $("#restart-button").click(function(event) {
//     $(".welcome").hide(); 
//     $(".search").show(); 
//     $(".results").hide();
//     console.log("re-started"); 
//   })



  function getImage(dogBreed) {
  console.log("fetch image"); 
  fetch(`https://dog.ceo/api/breed/${dogBreed}/images/random`)
  .then(response => {
  if (response.ok) {
      return response.json();
  }
  throw new Error(response.statusText);
  })
  .then(responseJson => generateImage(responseJson))
  .catch(err => {
  $('#js-error-message').text(`Something went wrong: ${err.message} I want the error message to go here`);
  });

  };



function generateImage(responseJson) {
  $(".search").hide();  
  $(".results").show(); 
  $(".dog-images").html("");
  $('.dog-images').append(`<img src="${responseJson.message}" class="dog-images" alt="Your Dog Breed">`)
  console.log(responseJson);
};
  


// function watchForm(event) {
  // $("#dog-form").submit(event => {
  // event.preventDefault();
  // let dogBreed = $(".dog-selector").val();
  // getImage(dogBreed);
  // console.log("input sent");
  // });
// }

