
function login(){
    var url = window.location.href;
    var pos = url.indexOf('/');
    var newurl = url.slice(0,pos);
    newurl = newurl +"/";
    var l = sessionStorage.getItem("length");
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    for(var i=0; i<=l; i++)
    {
        if(username === sessionStorage.getItem("user"+i))
        {
            if(password === sessionStorage.getItem("password"+i))
            {
                document.getElementById("logins").innerHTML = "Login successful redirecting...";
                window.location.href = newurl;
                break;
            }
            else{
                document.getElementById("logins").innerHTML = "Wrong Password! Please check your password."
                break;
            }
        }
        else
        {
            document.getElementById("logins").value = "Username not found."
        }
    }

}