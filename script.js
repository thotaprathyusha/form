const form =document.getElementById("form");
const username =document.getElementById("username");
const email =document.getElementById("email");
const password =document.getElementById("password");
const passwordcheck=document.getElementById("passwordcheck");


form.addEventListener('submit',(e) => { 
    if(username.value.trim() == "" ){
        alert("blank username is not aloowed");
    }
    else if(email.value.trim() == ""){
        alert("blank email is not aloowed");
    }
    else if(password.value.trim() == ""){
        alert("blank passwords or weak passwords are not aloowed ");
    }
    else if(password.length <=6){
        alert("weak passwords are not allowed ");
    }
    else if(passwordcheck.value.trim() == ""){
        alert("blank password is not aloowed");
    }
    else if(password.value !== passwordcheck.value ){
        alert("passwords should match");
    }
    else {
        alert("Successfully submitted");
    }

});

