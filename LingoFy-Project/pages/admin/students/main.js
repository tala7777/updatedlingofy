document.addEventListener("DOMContentLoaded", () => {
    const studentsTable = document.getElementById("studentsTable");
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const students = users.filter(u => u.role === "student");

    if (students.length === 0) {
        studentsTable.innerHTML = `<tr><td colspan="3" class="text-center py-4 text-muted">No students found.</td></tr>`;
    } else {
        studentsTable.innerHTML = students.map(s => `
            <tr>
                <td class="fw-semibold">${s.fullName}</td>
                <td>${s.email}</td>
                <td>
                    <button class="btn btn-sm btn-outline-danger" onclick="deleteUser('${s.email}')">
                        <i class="bi bi-trash"></i>
                    </button>
                </td>
            </tr>
        `).join("");
    }
});

function deleteUser(email) {
    Swal.fire({
        title: 'Are you sure?',
        text: "This student will be permanently removed.",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#dc3545',
        cancelButtonColor: '#6c757d',
        confirmButtonText: 'Yes, delete!'
    }).then((result) => {
        if (result.isConfirmed) {
            let users = JSON.parse(localStorage.getItem("users")) || [];
            users = users.filter(u => u.email !== email);
            localStorage.setItem("users", JSON.stringify(users));
            location.reload();
        }
    });
}
