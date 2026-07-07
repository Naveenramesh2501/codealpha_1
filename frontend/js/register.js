document
.getElementById("registerForm")
.addEventListener("submit", registerUser);

function registerUser(e){

e.preventDefault();

const name =
document.getElementById("name").value;

const email =
document.getElementById("email").value;

const password =
document.getElementById("password").value;

const confirmPassword =
document.getElementById(
"confirmPassword"
).value;

if(password !== confirmPassword){

alert(
"Passwords do not match"
);

return;

}

let users =
JSON.parse(
localStorage.getItem("users")
) || [];

const existingUser =
users.find(
u => u.email === email
);

if(existingUser){

alert(
"Email already registered"
);

return;

}

const newUser = {

id: Date.now(),

name:name,

email:email,

password:password

};

users.push(newUser);

localStorage.setItem(
"users",
JSON.stringify(users)
);

alert(
"Registration Successful"
);

window.location.href =
"login.html";

}