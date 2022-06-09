//Day45-UC4 ::: Display Employee Details in Tabular format using Template Literals
//Day45-UC5 ::: Display All Employee Payroll Details from JSON
//Day45-UC6 ::: Ability to view Employee Payroll details from Local Storage.
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
        <td>${stringifyDate(employeePayrollData.fullDate)}</td>
        <td>
        <img id ="${employeePayrollData._name}" src="../assets/icons/delete-black-18dp.svg" alt="delete" onclick="remove(this)">
        <img id ="${employeePayrollData._name}" src="../assets/icons/create-black-18dp.svg" alt="edit" onclick="update(this)">
        </td>
    </tr>`;
}
document.querySelector('#table-display').innerHTML = innerHtml;
}

const getDepartmentHtml = (departmentList) => {     //UC6 : Getting Data 
    let departmentHtml = '';
    for(const department of departmentList){
      departmentHtml = `${departmentHtml} <div class='dept-label'>${department}</div>`
    }
    return departmentHtml
}

//Day 46-UC1::: Remove function
const remove = (node) => {
  let employeePayrollData = employeePayrollList.find(empData => empData._name == node.id);
  if (!employeePayrollData) return;
  const index = employeePayrollList
                .map(empData => empData._id)
                .indexOf(employeePayrollData._id);
  employeePayrollList.splice(index, 1);
  localStorage.setItem("EmployeePayrollList", JSON.stringify(employeePayrollList));
  createInnerHtml();
}

//Day 46-UC2::: Edit or update function
const update = (node) => {
  let employeePayrollData = employeePayrollList.find(empData => empData._name == node.id)
  if (!employeePayrollData) return;
  localStorage.setItem('editEmp', JSON.stringify(employeePayrollData))
  window.location.replace(site_properties.add_emp_payroll_page)
}

