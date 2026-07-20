"use strict";
class Employee {
    name;
    salary;
    department;
    constructor(name, salary, department) {
        this.name = name;
        this.salary = salary;
        this.department = department;
    }
    showDetails() {
        console.log(this.name);
        console.log(this.salary);
        console.log(this.department);
    }
}
let emp = new Employee("Ravi", 50000, "IT");
emp.showDetails();
