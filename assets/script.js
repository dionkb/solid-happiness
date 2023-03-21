// Declare variables for use
let today = dayjs();

// Variables used for comparing current time to each
let nineAM = today.hour(9).minute(0).second(0);
let tenAM = today.hour(10).minute(0).second(0);
let elevenAM = today.hour(11).minute(0).second(0);
let twelvePM = today.hour(12).minute(0).second(0);
let onePM = today.hour(13).minute(0).second(0);
let twoPM = today.hour(14).minute(0).second(0);
let threePM = today.hour(15).minute(0).second(0);
let fourPM = today.hour(16).minute(0).second(0);
let fivePM = today.hour(17).minute(0).second(0);
let hoursList = [
  nineAM,
  tenAM,
  elevenAM,
  twelvePM,
  onePM,
  twoPM,
  threePM,
  fourPM,
  fivePM,
]

// Variables used to select id's
let hour9 = document.getElementById("hour-9");
let hour10 = document.getElementById("hour-10");
let hour11 = document.getElementById("hour-11");
let hour12 = document.getElementById("hour-12");
let hour13 = document.getElementById("hour-13");
let hour14 = document.getElementById("hour-14");
let hour15 = document.getElementById("hour-15");
let hour16 = document.getElementById("hour-16");
let hour17 = document.getElementById("hour-17");
let timeBlocks = [
  hour9, 
  hour10, 
  hour11, 
  hour12, 
  hour13, 
  hour14, 
  hour15, 
  hour16, 
  hour17,
]


console.log(hoursList);

// Header displays date and time
$('#currentDay').text(today.format('MMM DD, YYYY'));
$('#currentTime').text(today.format('h:mm a'));

// Checking if the timeblock is the past, present, or future.
function checkPPF() {
  for (let i = 0; i < hoursList.length; i++) {
    isFuture = today.isBefore(hoursList[i]);
    isPast = today.isAfter(hoursList[i]);
    // Checks if time is already past
    if (isPast === true && isFuture === false) {
      console.log((i+9) + " IS IN THE PAST");
      $(timeBlocks[i]).removeClass("present");
      $(timeBlocks[i]).addClass("past");
      $(timeBlocks[i]).removeClass("future");
    }
    // Checks if time is in the future
    else if (isPast === false && isFuture === true) {
      console.log((i+9) + " IS IN THE FUTURE");
      $(timeBlocks[i]).removeClass("present");
      $(timeBlocks[i]).removeClass("past");
      $(timeBlocks[i]).addClass("future");
    }
    // Checks if current time is within this hour block
    else {
      console.log((i+9) + " IS NOW");
      $(timeBlocks[i]).addClass("present");
      $(timeBlocks[i]).removeClass("past");
      $(timeBlocks[i]).removeClass("future");
    }
  }
}
checkPPF();


// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
