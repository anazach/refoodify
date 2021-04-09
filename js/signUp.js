



const signUp = () => {
    let email = document.getElementById('email').value;
let password = document.getElementById('password').value;
let username = document.getElementById('username').value;
let fullName = document.getElementById('fullName').value;
    console.log(email, password, username, fullName);


    window.location.href = ("/pages/receive.html");
}