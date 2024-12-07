document.getElementById("login").addEventListener("click",login);

function login(e){
    e.preventDefault();
    let username= document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if(username==""||password==""){
        alert("all fields are required");
        return;
    }
    let storedusername = localStorage.getItem("username");
    let storedpassword = localStorage.getItem("password");

    if(storedusername==username&&storedpassword==password){
        alert(`login successful, welcome ${username}`);
        window.location.href="index.html";
    }
    else{
        alert("invalid credentials");
    }
}