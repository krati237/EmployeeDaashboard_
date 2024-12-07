document.getElementById("btn").addEventListener("click",add);

function add(e){
    e.preventDefault(); //prevent default behaviour of form submit

    let username = document.getElementById("username").value;
    let email= document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let cnfpsw = document.getElementById("cnfpsw").value;

    if(username ==""||email==""||password==""||cnfpsw==""){
        alert("all fields are mandatory");
        return;
    }
    if(password!=cnfpsw){
        alert("password does not match");
        return;
    }
    localStorage.setItem("username",username);
    localStorage.setItem("email",email);
    localStorage.setItem("password",password);
    
    //redirect to login page
    window.location.href ="index.html";

    //display success message
    alert("registration successful");
}