// UC 9 ::: On Form Submit populate the Employee Payroll Data Object by using JavaScript function
//Day 44 - UC1//
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
    //Emp ID
    get id(){
        return this._id;
    }

    set id(id){
        this._id = id;
    }

    // Name
    get name() {
        return this._name;
    }

    set name(name){
        let nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$')        //UC 10  & Day44-UC2 ::: Performing validation
        if (nameRegex.test(name))
            this._name = name;
        else throw "Name is Incorrect!";
    }

    //profile Image
    get profileImage() {
        return this._profileImage;
    }
    set profileImage(profileImage) {
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
        const employeeDate = !this.startDate ? "undefined" : 
                            this.startDate.toLocaleDateString("en-US", options);
        return "Name = " + this.name + ", Profile Image = " + this.profileImage + ", Gender = " + this.gender + ", Department = " + this.department + ", Salary = " + this.salary 
                + ", Start Date = " + employeeDate + ", Notes = " + this.notes;
    }
}



//Day 44 : UC2:: On document, setting Event Listeners

window.addEventListener('DOMContentLoaded', (event) =>{
    const name = document.querySelector ('#name');
    const textError = document.querySelector ('.text-error');
    name.addEventListener('input', function(){
        if(name.value.length == 0){
            textError.textContent = "";
            return;
        }
        try {
            (new EmployeePayrollData()).name = name.value;;
            textError.textContent = "";
        } catch (e){
            textError.textContent = e;
        }
    });

    const salary = document.querySelector('#salary');
    const output = document.querySelector('.salary-output');
    output.textContent = salary.value;
    salary.addEventListener('input', function(){
        output.textContent = salary.value;
    });
});

//Day 44 : UC3:: On Save, Create Employee Payroll Object
const save  = () => {
    try {
        let employeePayrollData = createEmployeePayroll();
        createAndUpdateStorage(employeePayrollData);                //Day44 - UC4 Saving Employee Payroll to local storage
    } catch (e){
        return;
    }
}

const createEmployeePayroll = () => {
    let employeePayrollData = new EmployeePayrollData();
    try {
        employeePayrollData.name = getInputValueById('#name');
    } catch (e) {
        setTextValue('.text-error', e);
        throw e;
    }
    employeePayrollData.profileImage = getSelectedValues('[name=profile]').pop();
    employeePayrollData.gender = getSelectedValues('[name=gender]').pop();
    employeePayrollData.department = getSelectedValues('[name=department]');
    employeePayrollData.salary = getInputValueById('#salary');
    employeePayrollData.notes = getInputValueById('#notes');

    let date = getInputValueById('#day') + " " + getInputValueById("#month") + " " + getInputValueById("#year");
    employeePayrollData.date = Date.parse(date);
    return employeePayrollData;
    alert(employeePayrollData.toString());
    return employeePayrollData;
}

const getSelectedValues = (propertyValue) => {
    let allItem = document.querySelectorAll(propertyValue);
    let selItem = [];
    allItem.forEach(item => {
        if(item.checked) selItem.push (item.value);
    });
    return selItem;
}

/* QuerySelector will used to find element */
const getInputValueById = (id) => {
    let value = document.querySelector(id).value;
    return value;
}

//Day44-UC4 ::: Saving Employee Payroll to Local Storage
function createAndUpdateStorage (employeePayrollData) {
    let employeePayrollList = JSON.parse(localStorage.getItem("EmployeePayrollList"));

    if (employeePayrollList != undefined){
        employeePayrollList.push(employeePayrollData);
    } else {
        employeePayrollList = [employeePayrollData]
    }
    alert(employeePayrollList.toString());
    localStorage.setItem("EmployeePayrllList", JSON.stringify (employeePayrollList))
}

