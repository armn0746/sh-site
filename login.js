document.getElementById('loginbtn').addEventListener('click',function(){
    const login = document.getElementById('loginbox');
    const loginfild = login.value;
    console.log(loginfild);
    const password = document.getElementById('passwordbox');
    const passwordfild = password.value;
    console.log(passwordfild);




    if( loginfild === "arman" && passwordfild === "11"){
        location.href = "u.html"
    }
    else{
        alert (" wrong usrname and password")
    }
})

