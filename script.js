function checkPassword(){
    let password = document.getElementById("password_forgotpassword").value;
    let cnfrmPassword = document.getElementById("confirm-password_forgotpassword").value;
    console.log(" password_forgotpassword:", password,'\n',"confirm-password_forgotpassword:",cnfrmPassword);
    let message = document.getElementById("message_forgotpassword");

    if(password.length != 0){
        if(password == cnfrmPassword){
            message.textContent = "Passwords match";
            message.style.backgroundColor = "#1dcd59";
        }
        else{
            message.textContent = "Password don't match";
            message.style.backgroundColor = "#ff4d4d";
        }
    }
    else{
        alert("Password can't be empty!");
        message.textContent = "";
    }
}