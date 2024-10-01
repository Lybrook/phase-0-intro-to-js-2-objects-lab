// Step 1: Initialize employee object
const employee = {
    name: 'John Doe',
    streetAddress: '123 Main St'
  };
  
  // Step 2: Create functions
  
  // Non-destructive update: returns a new object with the updated key-value pair
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
      ...employee,    // Spread operator to copy existing properties
      [key]: value    // Update the value for the specified key
    };
  }
  
  // Destructive update: mutates the original employee object
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;  // Directly update the employee object
    return employee;
  }
  
  // Non-destructive delete: returns a new object without the specified key
  function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee }; // Copy the employee object
    delete newEmployee[key];             // Delete the specified key
    return newEmployee;                  // Return the new object
  }
  
  // Destructive delete: mutates the original employee object
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];  // Delete the specified key from the original object
    return employee;       // Return the modified object
  }
  