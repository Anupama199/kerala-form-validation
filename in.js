var pass=document.getElementById('password');
var email=document.getElementById('email');
var error3=document.getElementById('err3');
var error1=document.getElementById('err1');


function validate(){
  
    var regexPwd = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  var regexEmail= /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;

    let isValid = true;

    
    
    if(regexPwd.test(pass.value)){
        error3.innerHTML="Strong Password";
        
        error3.style.color = "green";
        
        isValid = true;
    }
    
    
    else {
    
        error3.innerHTML="Password must contain at least 8 characters, one uppercase letter, one lowercase letter, and one number" ;
        error3.style.color = "red";
        
        isValid = false;
    }

    
    
    
    if(regexEmail.test(email.value)){
        error1.innerHTML="Valid Email";
        
        error1.style.color = "green";
        
        isValid = true;
    }
    
    
    else {
    
        error1.innerHTML="Invalid Email id" ;
        error1.style.color = "red";
        
        isValid = false;
    }


    return isValid;
}