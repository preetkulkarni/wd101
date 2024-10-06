function collectData() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const dob = document.getElementById('dob').value;
    const termsChecked = document.getElementById('terms').checked;

    // Create a user object
    const userData = {
        name: name,
        email: email,
        password: password,
        dob: dob,
        terms: termsChecked
    };

    // Store user data in local storage as a JSON object
    localStorage.setItem('userData', JSON.stringify(userData));

    // Optional: To check the stored data
    console.log("User data saved to local storage:", userData);
}

/*

const retrieveEntries = () =>{
    let entries = localStorage.getItem("userData");
    if(entries){
        entries = JSON.parse(entries);
    } else {
        entries = [];
    }
    return entries;
}

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

    const table = `<table class="table-auto w-full">
    <tr>
    <th class="px-4 py-2">Name</th>
    <th class="px-4 py-2">Email</th>
    <th class="px-4 py-2">Password</th>
    <th class="px-4 py-2">DOB</th>
    <th class="px-4 py-2">Terms Accepted?</th>
    </tr>${tableEntries} 
    </table>`;
}

*/