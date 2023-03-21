// Declare variables for use
let today = dayjs();
let nineAM = today.hour(9);
let tenAM = today.hour(10);
let elevenAM = today.hour(11);
let twelvePM = today.hour(12);
let onePM = today.hour(13);
let twoPM = today.hour(14);
let threePM = today.hour(15);
let fourPM = today.hour(16);
let fivePM = today.hour(17);

// Header displays date and time
$('#currentDay').text(today.format('MMM DD, YYYY'));
$('#currentTime').text(today.format('h:mm a'));

// Checking if the timeblock is the past, present, or future.
let timeCheck = today.isAfter(nineAM);
console.log(timeCheck);

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
