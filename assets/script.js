// Declare variables for use

// Header displays date and time
let today = dayjs();
$('#currentDay').text(today.format('MMM DD, YYYY'));
$('#currentTime').text(today.format('h:mm a'));

// Variables used for comparing current time to each timeblock
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

// Variables used for the save button functionality.
let saveButtonEl = document.querySelectorAll('.saveBtn');


// ------------------------- END OF VARIABLES ---------------------------//

// ------------------------- BEGINNING OF CODE --------------------------//


// This wrap is shorthand for:
//    $(document).ready(function() {
//      [Wrap functions inside]
//    });
// This tells the document to wait unti entire DOM is loaded before running the Javascript within.
$(function () {
// Checking if the timeblock is the past, present, or future.
// Runs through each timeblock and checks if it is after, before, or same as current hour.
// Adds or removes classes as needed to color code timeblocks accordingly.
  function checkPPF() {
    for (let i = 0; i < hoursList.length; i++) {
      isPast = today.isAfter(hoursList[i], 'hour');
      isPresent = today.isSame(hoursList[i], 'hour');
      isFuture = today.isBefore(hoursList[i], 'hour');
      // Checks if time is already past
      if (isPast === true && isFuture === false) {
        // console.log((i+9) + " IS IN THE PAST"); ----- Used to test functionality
        $(timeBlocks[i]).removeClass("present");
        $(timeBlocks[i]).addClass("past");
        $(timeBlocks[i]).removeClass("future");
      }
      // Checks if time is in the future
      else if (isPast === false && isFuture === true) {
        // console.log((i+9) + " IS IN THE FUTURE"); ----- Used to test functionality
        $(timeBlocks[i]).removeClass("present");
        $(timeBlocks[i]).removeClass("past");
        $(timeBlocks[i]).addClass("future");
      }
      // Checks if current time is within this hour block
      else if (isPast === false && isFuture === false) {
        // console.log((i+9) + " IS HAPPENING"); ----- Used to test functionality
        $(timeBlocks[i]).addClass("present");
        $(timeBlocks[i]).removeClass("past");
        $(timeBlocks[i]).removeClass("future");
      }
      else {
        return;
      }
    }
  }
  // Calls the function to run
  checkPPF();

  // Saves any text input once the save button for that timeblock is clicked.
  function saveItem() {
    let taskItemsEl = document.querySelectorAll('#textArea');
    for (let i = 0; i < taskItemsEl.length; i++) {
      let taskNumber = [];
      taskNumber[i] = taskItemsEl[i].value;
      localStorage.setItem("task" + (i + 9) +"o'clock", taskNumber[i]);
      // console.log(taskNumber[i]); ----- Used to test functionality
    }
  }

  // Loads text input from each timeblock from local storage when user returns to page or refreshes
  function loadItem() {
    let taskItemsEl = document.querySelectorAll('#textArea');
    for (let i = 0; i < taskItemsEl.length; i++) {
      let taskLoad = (localStorage.getItem("task" + (i + 9) + "o'clock"));
      taskItemsEl[i].innerHTML = taskLoad;
      // console.log(taskLoad); ----- Used to test functionality
    }
  }
  // Calls the loadItem function to run right on page loadup
  loadItem();

  // Eventlisteners to respond to user input. Each save button functions only on its own timeblock
  saveButtonEl.forEach(function(uniqueSaveBtn) {
    uniqueSaveBtn.addEventListener('click', saveItem);
  })

});