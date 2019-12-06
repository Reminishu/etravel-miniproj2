var i = 0;
function signup(){
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var email = document.getElementById('email').value;
    var firstname = document.getElementById('firstname').value;
    var lastname = document.getElementById('lastname').value;
    localStorage.setItem("user"+i, username);
    localStorage.setItem("password"+i, password);
    localStorage.setItem("email"+i, email);
    localStorage.setItem("fname"+i, firstname);
    localStorage.setItem("lname"+i, lastname);
    i++;
    localStorage.setItem("length", i);
    console.log(i);
}