const API_URL = "https://demo-api-skills.vercel.app/api/users"; // Change to your Vercel API
const group = "admin"

// Fetch all users
function fetchUsers() {
    axios.get(API_URL+"?group="+group)
        .then(response => {
            const users = response.data;
            let outputHTML = "<ul>";
            users.forEach(user => {
                outputHTML += `<li><strong>${user.id}</strong> - ${user.email} (Group: ${user.group})</li>`;
            });
            outputHTML += "</ul>";
            document.getElementById("output").innerHTML = outputHTML;
        })
        .catch(error => {
            document.getElementById("output").innerHTML = "Error fetching users";
            console.error("Error:", error);
        });
}

// Add a new user
document.getElementById("userForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    axios.post(API_URL, { name, email, password, group:"admin" })
        .then(response => {
            alert("User added successfully!");
            fetchUsers(); // Refresh the users list
            document.getElementById("userForm").reset(); // Clear the form
        })
        .catch(error => {
            alert("Error adding user");
            console.error("Error:", error);
        });
});
