document.getElementById('toggle-password').addEventListener('click', function () {
    const passwordInput = document.getElementById('password');
    const inputType = passwordInput.type;

    if (inputType === 'password') {
        passwordInput.type = 'text';
    } else {
        passwordInput.type = 'password';
    }
});


function focus1(){
    let name = document.getElementById('name')
    name.style.color = "rgba(0, 0, 0, 0.781)";
    name.style.fontSize = "19px";
}
function blur1(){
    let name = document.getElementById('name')
    name.style.color = "rgba(0, 0, 0, 0.555)";
    name.style.fontSize = "18px";
}
function focus2(){
    let password = document.getElementById('passwrd')
    password.style.color = "rgba(0, 0, 0, 0.781)";
    password.style.fontSize = "19px";
}
function blur2(){
    let password = document.getElementById('passwrd')
    password.style.color = "rgba(0, 0, 0, 0.555)";
    password.style.fontSize = "18px";
}
