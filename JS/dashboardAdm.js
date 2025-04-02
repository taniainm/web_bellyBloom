let users = [
    { id: 1, name: "John Doe", email: "john@example.com", role: 1 }
];

function renderTable() {
    const tableBody = document.getElementById("userTable");
    tableBody.innerHTML = "";
    users.forEach(user => {
        const roleText = user.role === 1 ? "Admin" : "User";
        const row = `<tr>
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${roleText}</td>
            <td>
                <button onclick="editUser(${user.id})">Edit</button>
                <button onclick="deleteUser(${user.id})">Hapus</button>
            </td>
        </tr>`;
        tableBody.innerHTML += row;
    });
}

function saveUser() {
    const userId = document.getElementById("userId").value;
    const userName = document.getElementById("userName").value;
    const userEmail = document.getElementById("userEmail").value;
    const userRole = document.getElementById("userRole").value;

    if (userId) {
        // Edit existing user
        let user = users.find(u => u.id == userId);
        user.name = userName;
        user.email = userEmail;
        user.role = parseInt(userRole);
    } else {
        // Add new user
        const newUser = {
            id: users.length ? users[users.length - 1].id + 1 : 1,
            name: userName,
            email: userEmail,
            role: parseInt(userRole)
        };
        users.push(newUser);
    }

    document.getElementById("userId").value = "";
    document.getElementById("userName").value = "";
    document.getElementById("userEmail").value = "";
    document.getElementById("userRole").value = "";
    renderTable();
}

function editUser(id) {
    let user = users.find(u => u.id == id);
    document.getElementById("userId").value = user.id;
    document.getElementById("userName").value = user.name;
    document.getElementById("userEmail").value = user.email;
    document.getElementById("userRole").value = user.role;
}

function deleteUser(id) {
    users = users.filter(u => u.id !== id);
    renderTable();
}

document.addEventListener("DOMContentLoaded", renderTable);
