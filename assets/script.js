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

// DELETE WHEN DONE TESTING!!! 
let sixPM = today.hour(18).minute(0).second(0);
let sevenPM = today.hour(19).minute(0).second(0);
let eightPM = today.hour(20).minute(0).second(0);
let ninePM = today.hour(21).minute(0).second(0);
let tenPM = today.hour(22).minute(0).second(0);
let elevenPM = today.hour(23).minute(0).second(0);
let twleveAM = today.hour(24).minute(0).second(0);
// DELETE WHEN DONE TESTING!!! 

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

  // DELETE WHEN DONE TESTING!!! 
  sixPM,
  sevenPM,
  eightPM,
  ninePM,
  tenPM,
  elevenPM,
  twleveAM,
  // DELETE WHEN DONE TESTING!!! 
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

// DELETE WHEN DONE TESTING!!! 
let hour18 = document.getElementById("hour-18");
let hour19 = document.getElementById("hour-19");
let hour20 = document.getElementById("hour-20");
let hour21 = document.getElementById("hour-21");
let hour22 = document.getElementById("hour-22");
let hour23 = document.getElementById("hour-23");
let hour24 = document.getElementById("hour-24");
// DELETE WHEN DONE TESTING!!! 

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

  // DELETE WHEN DONE TESTING!!!
  hour18, 
  hour19,
  hour20, 
  hour21,
  hour22, 
  hour23,
  hour24,
  // DELETE WHEN DONE TESTING!!!
]

// Variables used for the save button functionality.
let saveButtonEl = document.querySelectorAll('.saveBtn');


// ------------------------- END OF VARIABLES ---------------------------//

// ------------------------- BEGINNING OF CODE --------------------------//


// Header displays date and time
$('#currentDay').text(today.format('MMM DD, YYYY'));
$('#currentTime').text(today.format('h:mm a'));


$(function () {
// Checking if the timeblock is the past, present, or future.
function checkPPF() {
  for (let i = 0; i < hoursList.length; i++) {
    isPast = today.isAfter(hoursList[i], 'hour');
    isPresent = today.isSame(hoursList[i], 'hour');
    isFuture = today.isBefore(hoursList[i], 'hour');
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
    else if (isPast === false && isFuture === false) {
      console.log((i+9) + " IS HAPPENING");
      $(timeBlocks[i]).addClass("present");
      $(timeBlocks[i]).removeClass("past");
      $(timeBlocks[i]).removeClass("future");
    }
    else {
      return;
    }
  }
}
checkPPF();

// Saves any text input once the save button is clicked.
function saveItem() {
  let taskItemsEl = document.querySelectorAll('#textArea');
  for (let i = 0; i < taskItemsEl.length; i++) {
    let taskNumber = [];
    taskNumber[i] = taskItemsEl[i].value;
    localStorage.setItem("task" + (i + 9) +"o'clock", taskNumber[i]);
    console.log(taskNumber[i]);
  }
}

// Loads text input from local storage when user returns to page or refreshes
function loadItem() {
  let taskItemsEl = document.querySelectorAll('#textArea');
  for (let i = 0; i < taskItemsEl.length; i++) {
    let taskLoad = (localStorage.getItem("task" + (i + 9) + "o'clock"));
    taskItemsEl[i].innerHTML = taskLoad;
    console.log(taskLoad);
  }
}
loadItem();

// Eventlisteners to respond to user input
for (let i = 0; i < saveButtonEl.length; i++) {
  saveButtonEl[i].addEventListener('click', saveItem);
}


// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
  // run();
});

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
