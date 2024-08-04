# Module3-Employee-payroll-tracker

## Description

Simplifying the required input from a user can often improve workflow by limiting the points at which the user can make a mistake. For instance, navigating through a blank spreadsheet and inputting values for names or number values can lead to inputs being placed in the incorrect columns/rows, potentially wasting time due to having to revise/edit the spreadsheet to properly convey (and possibly work with) data. This simple application would only require a payroll manager to supply four (4) inputs for an employee they wish to track the payroll of:

- The first name of the employee
- The last name of the employee
- The salary of the employee to the nearest dollar
- A yes/no prompt if they want to add more employees

As per request of the company, additional functionality was added to the application: a calculation of the average employee salary, and randomly selecting an employee among the ones listed. The application's interactive functionality operates through the use of iterative methods (i.e., for-/while-loops), arrays, object methods, and template literals handled in JavaScript.

## Installation

1. Navigate to https://github.com/Arcaneghost24/Module3-employee-payroll-tracker
2. Click the "Code" button.
3. Click the button next to the URL
4. Open up a new VSCode window
5. Open a new terminal
6. Run `git init` and then `git clone [paste the URL you copied from step 3 here]`

You will now have access to the application.

## Usage

Upon opening the `index.html` in your browser (or opening in a live server if you have the extension in VSCode) you'll be met with the application interface. Clicking <button>Add Employees</button> will initiate a series of prompts that will instruct you on what information to enter (i.e., employee first/last name, salary). Following these prompts, the application will ask if you would like to continue to add employees after you finish inputting information for one. Clicking <button>Cancel</button> will render the employee information that you input previously into the Employee Roster table.

In addition, the browser's Console will hold information that was requested to be logged alongside the visible functionality of the application. Right-clicking on the window will bring up a menu where you should then click "Inspect". This will bring up the developer tools on the side of the browser. Navigate the top icons to get to "Console". Upon opening it, you should see the console logging statements regarding the average salary of the employees input into the table, as well as randomly selecting one of the employees (note: while the log says the employee is meant for performance review, bear in mind this is a remnant of a previous client's request for the application).
