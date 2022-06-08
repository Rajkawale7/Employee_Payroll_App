//Day45-UC4 ::: Display Employee Details in Tabular format using Template Literals
//Day45-UC5 ::: Display All Employee Payroll Details from JSON
let employeePayrollList;
window.addEventListener('DOMContentLoaded', (event) => {
    employeePayrollList = getEmployeePayrollDataFromStorage();
    document.querySelector('.emp-count').textContent = employeePayrollList.length;
    createInnerHtml();
    localStorage.removeItem('editEmp');
});

const getEmployeePayrollDataFromStorage = () => {
  return localStorage.getItem('EmployeePayrollList') ? 
  JSON.parse(localStorage.getItem('EmployeePayrollList')) : [];
}

const createInnerHtml = () => {
const headerHtml ="<th>Profile</th><th>Name</th><th>Gender</th><th>Department</th>"+
                  "<th>Salary</th><th>Start Date</th><th>Actions</th>";
        
if(employeePayrollList.length == 0)return;
let innerHtml = `${headerHtml}`;
for(const employeePayrollData of employeePayrollList){
innerHtml = `${innerHtml}
      <tr>
        <td><img class="profile" src="${employeePayrollData._profileImage}"></td>
        <td>${employeePayrollData._name}</td>
        <td>${employeePayrollData._gender}</td>
        <td>${getDepartmentHtml(employeePayrollData._department)}</td>
        <td>${employeePayrollData._salary}</td>
        <td>${stringifyDate(employeePayrollData._startDate)}</td>
        <td>
        <img name =${employeePayrollData._id} src="../assets/icons/delete-black-18dp.svg" alt="delete" id="1" onclick="remove(this)">
        <img name =${employeePayrollData._id} src="../assets/icons/create-black-18dp.svg" alt="edit" id="1" onclick="update(this)">
        </td>
    </tr>`;
}
document.querySelector('#table-display').innerHTML = innerHtml;
}

const getDepartmentHtml = (departmentList) => {
    let departmentHtml = '';
    for(const department of departmentList){
      departmentHtml = `${departmentHtml} <div class='dept-label'>${department}</div>`
    }
    return departmentHtml
}