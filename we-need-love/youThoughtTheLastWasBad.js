document.prototype.frm = document.querySelector('.form');

function Cancel() 
{
    alert("User and Password are incorrect");
    document.frm.username.value="";
    document.frm.password.value="";
    document.getElementById("username").focus();
}

function checklogin(username, password) 
{
    var m_username = "admin123";
    var m_password = "milan12345"

    if(username != m_username || password != m_password) 
        return false;
    else
        return true;
}

function Login() {
    alert("You're logged in!");
}

function _submit()
{
    var f=document.frm;
    var username=f.username.value;
    var password=f.password.value;
    var validate = false;

    if(username === "" || password === "") 
    {
        alert("Username and Password cannot be empty");
        f.username.focus();
        validate = false;
    }
    if(!validate === checklogin(username, password)) 
    {
        Cancel();
    } else {
        Login();
    }
}

var submit_button = document.getElementsById('#submit-button');
submit_button.addEventListener('click', function() {
    _submit();
});

