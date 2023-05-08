var nme =document.getElementById('nme');
var nml =document.getElementById('nml');
var num=document.getElementById('num');
var email=document.getElementById('email');
var pass=document.getElementById('Password');
var error1=document.getElementById('err1');
var error2=document.getElementById('err2');
var error3=document.getElementById('err3');
var error4=document.getElementById('err4')
var error5=document.getElementById('err5');

function validate(){
    var regexNumber = /^\d{4,10}$/
    var regexPwd = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    var regexName = /^([A-Za-z]+)$/;
    var regexEmail= /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
    let isValid = true;

    
    
    
    if(regexName.test(nme.value)){
        error1.innerHTML="Valid Usser name";
        error1.style.color = "green";
        
        isValid = true;
    }
    else{
        error1.innerHTML="Provide a valid Usser name";
        error1.style.color= "red";
    
        isValid =  false;
    }

    if(regexName.test(nml.value)){
        error4.innerHTML="Valid Usser name";
        error4.style.color = "green";
        
        isValid = true;
    }
    else{
        error4.innerHTML="Provide Last name";
        error4.style.color= "red";
    
        isValid =  false;
    }



    if(regexNumber.test(num.value)){
        error2.innerHTML="Valid Number";
        error2.style.color = "green";
        
        isValid = true;
    }
    else{
        error2.innerHTML="Invalid Format";
        error2.style.color = "red";
        
        isValid =  false;
    }
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
        error5.innerHTML="Valid Email";
        
        error5.style.color = "green";
        
        isValid = true;
    }
    
    
    else {
    
        error5.innerHTML="Invalid Email id" ;
        error5.style.color = "red";
        
        isValid = false;
    }


    return isValid;}