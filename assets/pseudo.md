1. Make a header which uses dayjs to display the current day (and time if ya want) at top of calendar.
    Added date and time to header.
    ISSUE: Need to make it auto update each minute.
2. Break main content into wide rows to block out time of day (They want standard business hours...8-5?).
    Grid? Rows/Cols? List?
3. Use logic vs the current time to check if the timeblock is past, present, or future. Color code accordingly.
4. Time blocks must be able to have events entered into them
    Maybe use an input area?
5. Events must be saved to local storage. Can be recalled when refreshed. Think 'setItem'
6. Call em back, think 'getItem'
7. Make it pretty.


--------------------------- END OF PSEUDOCODE ------------------------------

-------------------- KEY NOTES FROM ACCEPTANCE CRITERIA --------------------

# 05 Third-Party APIs: Work Day Scheduler

## Your Task

Create a simple calendar application that allows a user to save events for each hour of the day by modifying starter code. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery. You'll need to use the [Day.js](https://day.js.org/en/).

## User Story

AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively

```

## Acceptance Criteria

GIVEN I am using a daily planner to create a schedule

WHEN I open the planner
THEN the current day is displayed at the top of the calendar

WHEN I scroll down
THEN I am presented with timeblocks for standard business hours

WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future

WHEN I click into a timeblock
THEN I can enter an event

WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage

WHEN I refresh the page
THEN the saved events persist
```

The following animation demonstrates the application functionality:

<!-- @TODO: create ticket to review/update image) -->
![A user clicks on slots on the color-coded calendar and edits the events.](./Assets/05-third-party-apis-homework-demo.gif)