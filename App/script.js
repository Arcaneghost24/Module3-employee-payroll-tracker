// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector("#add-employees-btn");

// Collect employee data
const collectEmployees = function () {
  let continueInput = true;
  const employees = [];
  while (continueInput) {
    let firstName = prompt("Enter employee first name.");
    let lastName = prompt("Enter employee last name.");
    let salary = parseInt(prompt("Enter employee approximate salary."));
    if (isNaN(salary)) {
      salary = 0;
    }

    let employee = {
      firstName,
      lastName,
      salary,
    };
    employees.push(employee);
    continueInput = confirm("Add another employee?");
  }
  return employees;
};

// Display the average salary
const displayAverageSalary = function (employeesArray) {
  let totalSalary = 0;
  for (let i = 0; i < employeesArray.length; i++) {
    totalSalary += employeesArray[i].salary;
    console.log(totalSalary);
  }
  let averageSalary = totalSalary / employeesArray.length;
  console.log(
    `The company's ${employeesArray.length} employees have an average salary of about ${averageSalary}.`
  );
};

// Select a random employee
const getRandomEmployee = function (employeesArray) {
  const randomInt = Math.floor(Math.random() * employeesArray.length);
  const randomEmployee = employeesArray[randomInt];
  console.log(
    `Employee randomly selected for performance review: ${randomEmployee.firstName} ${randomEmployee.lastName}.`
  );
};

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector("#employee-table");

  // Clear the employee table
  employeeTable.innerHTML = "";

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
};

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log("==============================");

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
};

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener("click", trackEmployeeData);
