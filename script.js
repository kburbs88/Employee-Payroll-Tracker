// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
// TODO: Get user input to create and return an array of employee objects
function collectEmployees() {
  let employees= [];
let trackEmployeeData = true;
while (trackEmployeeData) {
  
  let firstName = prompt("Please enter first name of employee"); 
  let lastName = prompt("Please enter last name of employee");
  let salary = prompt("Please enter salary of employee (use numbers only)"); 
  

  let currentEmployee = {
    firstName: firstName,
    lastName: lastName,
    salary: parseFloat(salary)
  };
employees.push(currentEmployee);

  trackEmployeeData= confirm("Do you want to add another employee to this list?")

};
return employees;
}
  

// Display the average salary
  // TODO: Calculate and display the average salary
  function displayAverageSalary (employeesArray) {
let sum=0
for (let i=0; i<employeesArray.length; i++) {
sum += employeesArray[i].salary
}
let average= sum / employeesArray.length;
let numberOfEmployees= employeesArray.length;
console.log(( "The average employee salary between our " + numberOfEmployees + " employee(s) is $"  + average.toFixed(2)));
};

// Select a random employee
// TODO: Select and display a random employee
function getRandomEmployee (employeesArray) {
  const randomIndex = Math.floor(Math.random() * employeesArray.length);
  const randomEmployee = employeesArray[randomIndex];

  console.log("Congratulations to " + randomEmployee.firstName + " " + randomEmployee.lastName + ", our random drawing winner!");
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement('tr');

    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement('td');
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement('td');
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
};

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

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
addEmployeesBtn.addEventListener('click', trackEmployeeData);
