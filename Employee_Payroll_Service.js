// UC 9 ::: On Form Submit populate the Employee Payroll Data Object by using JavaScript function
//Day 44 - UC1//
class EmployeePayrollData{
    
    //getter and setter method
    //Emp ID
    get id() {
        return this._id;
    }

    set id(id) {
        this._id = id;
    }

    // Name
    get name() {
        return this._name;
    }

    set name(name) {
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
        if (nameRegex.test(name))
            this._name = name;
        else
            throw "Name is Incorrect";
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
        this._gender = gender;
    }

    //department;
    get department() {
        return this._department;
    }

    set department(department) {
        this._department = department;
    }
    
    //Salary;
    get salary() {
        return this._salary;
    }

    set salary(salary) {
        this._salary = salary;

    }

    //StartDate
    get startDate() {
        return this._startDate;
    }

    set startDate(startDate) {
        var today = new Date();
        const one_month_ago = new Date(today.setDate(today.getDate()-30));
        today = new Date();
        if(today < startDate || startDate < one_month_ago) {
            throw 'Start date is invalid!';
        }
        else {
            this._startDate = startDate;
        }
    }

    //Notes
    get notes() {
        return this._notes;
    }

    set notes(notes) {
        this._notes = notes;
    }

    toString() {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const employeeDate = this.startDate == undefined ? "undefined" : this.startDate.toLocaleDateString("en-us", options);
        return "Id = " + this.id + ", Name = " + this.name + ", Profile Image = " + this.profileImage + ", Gender = " + this.gender + ", Department = " + this.department + ", Salary = " + this.salary + ", Start Date = " + this.fullDate + ", Notes = " + this.notes;
    }
}