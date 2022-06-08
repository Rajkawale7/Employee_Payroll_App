//Day45-UC4 ::: Display Employee Details in Tabular format using Template Literals
window.addEventListener('DOMContentLoaded', (event) =>{
    createInnerHtml();
});

//Defining Inner HTML using template literals: and use of ${headerHTML} to add data dynamically//
const createInnerHtml = () => {
    const headerHTML = "<th>Profile</th><th>Name</th><th>Gender</th><th>Department</th>"+ 
                        "<th>Salary</th><th>Start Date</th><th>Actions</th>";
    const innerHTML = `${headerHTML}       

    <tr>
        <td><img class = "Profile" src="../assets/profile-images/Ellipse -03.png" alt="profile_img-1"></td>

        <td> Raj Kawale </td>
        <td> Male </td>
        <td>
            <div class='dept-label'>Engineer</div>
            <div class='dept-label'>Finance</div>
        </td>
        <td>300000</td>
        <td>1 Nov 2020</td>
        <td>
            <img src="../assets/icons/delete-black-18dp.svg" alt="delete" id="1" onclick="remove(this)">
            <img src="../assets/icons/create-black-18dp.svg" alt="edit" id="1" onclick="update(this)">
        </td>
    </tr> 
`;
document.querySelector ('#table-display').innerHTML = innerHTML;
}