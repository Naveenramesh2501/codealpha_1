document
.getElementById("loginForm")
.addEventListener("submit", loginUser);

function loginUser(e){

e.preventDefault();

const email =
document.getElementById("email").value;

const password =
document.getElementById("password").value;

const users =
JSON.parse(
localStorage.getItem("users")
) || [];

const user =
users.find(
u =>
u.email === email &&
u.password === password
);

if(!user){

alert("Invalid Email or Password");

return;

}

localStorage.setItem(
"loggedInUser",
JSON.stringify(user)
);

alert("Login Successful");

window.location.href =
"index.html";

}