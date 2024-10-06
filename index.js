//real time table entry logic
let userForm = document.getElementById("registrationForm");

const retrieveEntries = () =>{
    let entries = localStorage.getItem("user-entries");
    if(entries){
        entries = JSON.parse(entries);
    } else {
        entries = [];
    }
    return entries;
}
let userEntries = retrieveEntries();

const displayEntries = () => {
    const entries = retrieveEntries();

    const tableEntries = entries.map((entry) => {
        const nameCell = `<td class='border px-4 py-2'>${entry.name}</td>`;
        const emailCell = `<td class='border px-4 py-2'>${entry.email}</td>`;
        const passwordCell = `<td class='border px-4 py-2'>${entry.password}</td>`;
        const dobCell = `<td class='border px-4 py-2'>${entry.dob}</td>`;
        const termsCell = `<td class='border px-4 py-2'>${entry.terms}</td>`;

        const row = `<tr>${nameCell} ${emailCell} ${passwordCell} ${dobCell} ${termsCell}</tr>`;
        return row;

    }).join("\n");

    const table = `<table class="table-auto w-full"><tr>
    <th class="px-4 py-2">Name</th>
    <th class="px-4 py-2">Email</th>
    <th class="px-4 py-2">Password</th>
    <th class="px-4 py-2">DOB</th>
    <th class="px-4 py-2">Terms Accepted?</th>
    </tr>${tableEntries} </table>`;

    let details = document.getElementById("user-entries");
    details.innerHTML = table;
}

const saveUserForm = (event) => {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const dob = document.getElementById('dob').value;
    const termsChecked = document.getElementById('terms').checked;

    const userData = {
        name: name,
        email: email,
        password: password,
        dob: dob,
        terms: termsChecked
    };

    userEntries.push(userData);

    localStorage.setItem('user-entries', JSON.stringify(userEntries));

    displayEntries();
}
displayEntries();