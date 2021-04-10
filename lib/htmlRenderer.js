function render(employeeData) {
    let employees = [];
    employees.push(
        employeeData
        .filter((employee) => employee.getRole() === "Manager")
        .map((manager) => managerhtml(manager))
    );
    employees.push(
        employeeData
        .filter((employee) => employee.getRole() === "Engineer")
        .map((engineer) => engineerhtml(engineer))
    );
}
employees.push(
    employeeData
    .filter((employee) => employee.getRole() === "Intern")
    .map((intern) => internhtml(intern))
);

function managerhtml() {}