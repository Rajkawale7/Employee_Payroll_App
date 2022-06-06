// UC 9 ::: On Form Submit populate the Employee Payroll Data Object by using JavaScript function

class EmployeePayrollData{
    //constructor
    constructor(...params){
        this.name = params [0];
        this.profileImage = params [1];
        this.gender = params [2];
        this.department = params [3];
        this.salary = params [4];
        this.startDate = params [5];
        this.notes = params [6];
    }

    //getter and setter method
    // Name
    get name() {
        return this._name;
    }

    set name(name){
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');          //UC 10 ::: Performing validation
        if (nameRegex.test(name))
            this._name = name;
        else throw "Name is Incorrect!";
    }

    //profile Image
    get profileImage() {
        return this._profileImage;
    }
    set profileImage(value) {
        this._profileImage = profileImage;
    }

    //Gender
    get gender() {
        return this._gender;
    }
    set gender(gender) {
        let genderRegex = RegExp('^[female|male]+$');
        if (genderRegex.test(gender))
            this._gender = gender;
        else
            throw "Gender selection is incorrect";
    }

    //department;
    get department() {
        return this._department;
    }
    set department(value) {
        this._department = department;
    }
    
    //Salary;
    get salary() {
        return this._salary;
    }
    set salary(salary) {
        let salaryRegx = RegExp('^[1-9][0-9]*$');                   //UC 10 ::: Performing validation
        if (salaryRegx.test(salary))
            this._salary = salary;
        else
            throw "Salary is in out of range";
    }

    //StartDate
    get startDate() {
        return this._startDate;
    }
    set startDate(value) {
        this._startDate = startDate;
    }

    //Notes
    get notes() {
        return this._notes;
    }
    set notes(value) {
        this._notes = notes;
    }

    //Method
    toString() {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const employeeDate = this.startDate == undefined ? "undefined" : this.startDate.toLocaleDateString("en-us", options);
        return "Name = " + this.name + ", Profile Image = " + this.profileImage + ", Gender = " + this.gender + ", Department = " + this.department + ", Salary = " + this.salary 
                + ", Start Date = " + employeeDate + ", Notes = " + this.notes;
    }
}

function save() {

    let employeeName = document.querySelector('#name').value;
    let profileList = document.querySelectorAll('input[name="profile"]');
    let employeeProfileImage;
    for (let image of profileList) {
        if (image.checked) {
            employeeProfileImage = image.value;
            break;
        }
    }

    let genderList = document.querySelectorAll('input[name="gender"]');
    let employeeGender;
    for (let gender of genderList) {
        if (gender.checked) {
            employeeGender = gender.value;
            break;
        }
    }

    let departmentList = document.querySelectorAll('.checkbox:checked');
    let employeeDepartment = new Array();
    for (let department of departmentList) {
        if (department.checked) {
            employeeDepartment.push(department.value);
        }
    }

    let employeeSalary = document.querySelector('#salary').value;

    let day = document.querySelector('#day').value;
    let month = document.querySelector('#month').value;
    let year = document.querySelector('#year').value;
    let employeeStartDate = new Date(year, month, day);

    let employeeNotes = document.querySelector('#notes').value;

    try {
        let employeePayrollData = new EmployeePayrollData(employeeName, employeeProfileImage, employeeGender, employeeDepartment, employeeSalary, employeeStartDate, employeeNotes);
        console.log(employeePayrollData.toString());
    } catch (e) {
        console.error(e);
    }
}