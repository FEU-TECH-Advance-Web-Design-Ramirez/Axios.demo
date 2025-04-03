const group = "admin"

// Fetch all users
// 3 usage of api
function fetchUsers() {
    const API_URL = "https://demo-api-skills.vercel.app/api/MusicLover/users"

    axios.get(API_URL)
    .then(response => {
        const users = response.data;
        let outputHTML = "<ul>";
        users.forEach(user => {
            outputHTML += `<li><strong>${user.id}</strong> - ${user.email}</li> ${user.name}`;
        });
        outputHTML += "</ul>";
        document.getElementById("output").innerHTML = outputHTML;
        })
        .catch(error => {
            document.getElementById("output").innerHTML = "Error fetching users";
            console.error("Error:", error);
        });
}

// Sign Up
// 3 useage of api
document.getElementById("userForm").addEventListener("submit", function (event) {
    // 4 add the api link
    const API_URL = "https://demo-api-skills.vercel.app/api/MusicLover/users"; // Change to your Vercel API
    event.preventDefault();

    // 5 get the inputed data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    axios.post(API_URL, { name, email, password })
        .then(response => {
            alert("User added successfully!");
            fetchUsers(); // Refresh the users list
            document.getElementById("userForm").reset(); // Clear the form
        })
        .catch(error => {
            alert(error.message);
            console.error("Error:", error);
        });
});

document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const API_URL = "https://demo-api-skills.vercel.app/api/MusicLover/users/login/"

    const email = document.getElementById("emailLogin").value;

    axios.get(API_URL+email)
        .then((res) => {
            alert("Login Success");
            localStorage.setItem("userId")
        })
        .catch((err) => {
            alert("Failed to login")
        })
})

document.getElementById("logout").addEventListener("keypress", function (params) {
    alert("Logout user: " + localStorage.getItem("userId"));
    localStorage.clear("userId");
})