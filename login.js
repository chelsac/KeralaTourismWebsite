let em=document.getElementById("email");
let er=document.getElementById("email-error");
function emailvalidate(){
    let exp=/^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/ ;
    if(exp.test(em.value.trim())){
        er.style.display="none";
        em.style.border="solid";
        em.style.borderColor = "rgba(0, 255, 0, 0.5)";
        return true;
    }
    else if(em.value.trim()=="")
    {
        er.style.display="block";
        er.innerHTML="Email cannot be empty!";
        er.style.color="red";
        em.style.border="solid";
        em.style.borderColor = "rgba(255, 0, 0, 0.5)";
        return false;
    }
    else{
        er.style.display="block";
        er.innerHTML="Invalid email id";
        er.style.color="red";
        em.style.border="solid";
        em.style.borderColor = "rgba(255, 0, 0, 0.5)";
        return false;
    }

}

let fname=document.getElementById("fname");
let fer=document.getElementById("fname-error");
function fnamevalidate(){
    if(fname.value.trim()=="")
    {
        fer.style.display="block";
        fer.innerHTML="First name cannot be empty!";
        fer.style.color="red";
        fname.style.border="solid";
        fname.style.borderColor = "rgba(255, 0, 0, 0.5)";
        return false;
    }
    else{
        fer.style.display="none";
        fname.style.border="solid";
        fname.style.borderColor = "rgba(0, 255, 0, 0.5)";
        return true;
    }
}

let lname=document.getElementById("lname");
let ler=document.getElementById("lname-error");
function lnamevalidate(){
    if(lname.value.trim()=="")
    {
        ler.style.display="block";
        ler.innerHTML="Last name cannot be empty!";
        ler.style.color="red";
        lname.style.border="solid";
        lname.style.borderColor = "rgba(255, 0, 0, 0.5)";
        return false;
    }
    else{
        ler.style.display="none";
        lname.style.border="solid";
        lname.style.borderColor = "rgba(0, 255, 0, 0.5)";
        return true;
    }
}

let ph=document.getElementById("phone");
let per=document.getElementById("phone-error");
function phonevalidate(){
    let exp1=/^([0-9]{10})$/ ;
    let exp2=/^([0-9]{3})\-([0-9]{3})\-([0-9]{4})$/ ;
    let exp3=/^([0-9]{3})\.([0-9]{3})\.([0-9]{4})$/;
    let exp4=/^([0-9]{3})\s([0-9]{3})\s([0-9]{4})$/;
    if(exp1.test(ph.value.trim()) || exp2.test(ph.value.trim()) || exp3.test(ph.value.trim()) || exp4.test(ph.value.trim())){
        per.style.display="none";
        ph.style.border="solid";
        ph.style.borderColor = "rgba(0, 255, 0, 0.5)";
        return true;
    }
    else if(ph.value.trim()=="")
    {
        per.style.display="block";
        per.innerHTML="Mobile No. cannot be empty!";
        per.style.color="red";
        ph.style.border="solid";
        ph.style.borderColor = "rgba(255, 0, 0, 0.5)";
        return false;
    }
    else{
        per.style.display="block";
        per.innerHTML="Invalid Mobile No.";
        per.style.color="red";
        ph.style.border="solid";
        ph.style.borderColor = "rgba(255, 0, 0, 0.5)";
        return false;
    }
}

let pass1=document.getElementById("Password1");
let pass2=document.getElementById("Password2");
let passerror=document.getElementById("pass2-error");
function matchpass(){
    if(pass2.value=="")
    {
        passerror.style.display="block";
        passerror.innerHTML="re-enter password cannot be empty!";
        passerror.style.color="red";
        pass2.style.border="solid";
        pass2.style.borderColor = "rgba(255, 0, 0, 0.5)";
        return false;
    }
    else if(pass1.value==pass2.value){
        passerror.style.display="none";
        pass2.style.border="solid";
        pass2.style.borderColor = "rgba(0, 255, 0, 0.5)";
        return true;
    }
    else{
        passerror.style.display="block";
        passerror.innerHTML="Password mismatch";
        passerror.style.color="red";
        pass2.style.border="solid";
        pass2.style.borderColor = "rgba(255, 0, 0, 0.5)";
        return false;
    }
}

let m=document.getElementById("pass1-error");
let pass1er=document.getElementById("pass1-er");
let strong=document.getElementById("green");
let medium=document.getElementById("yellow");
let weak=document.getElementById("red");
let progress=document.getElementById("progress");
function passwordvalid(){
    progress.style.display="block";
var count=0;
let exp=/([0-9])+/ ;
if(exp.test(pass1.value)){
    count++;
}
if(pass1.value.length>=8){
    count++;
}
let exp1=/([a-z])+/ ;
if(exp1.test(pass1.value)){
    count++;
}

let exp2=/([A-Z])+/ ;
if(exp2.test(pass1.value)){
    count++;
}

if(count==4){
    pass1er.style.display="none";
    m.style.display="none";
    pass1.style.border="solid";
    pass1.style.borderColor = "rgba(0, 255, 0, 0.5)";
    strong.style.width="100%";
    medium.style.width="0%";
    weak.style.width="0%";
    return true;
}
else if(count==3){
    pass1er.style.display="block";
    pass1er.innerHTML="Invalid password";
    pass1er.style.color="red";
    pass1.style.border="solid";
    pass1.style.borderColor = "rgba(255, 0, 0, 0.5)";
    m.style.display="block";
    strong.style.width="0%";
    medium.style.width="75%";
    weak.style.width="0%";
    return false;
}
else if(count==2){
    pass1er.style.display="block";
    pass1er.innerHTML="Invalid password";
    pass1er.style.color="red";
    pass1.style.border="solid";
    pass1.style.borderColor = "rgba(255, 0, 0, 0.5)";
    m.style.display="block";
    strong.style.width="0%";
    medium.style.width="50%";
    weak.style.width="0%";
    return false;
}
else if(count==1){
    pass1er.style.display="block";
    pass1er.innerHTML="Invalid password";
    pass1er.style.color="red";
    pass1.style.border="solid";
    pass1.style.borderColor = "rgba(255, 0, 0, 0.5)";
    m.style.display="block";
    strong.style.width="0%";
    medium.style.width="0%";
    weak.style.width="25%";
    return false;
}
else{
    progress.style.display="none";
    pass1er.style.display="block";
    pass1er.innerHTML="Password cannot be empty!";
    pass1er.style.color="red";
    pass1.style.border="solid";
    pass1.style.borderColor = "rgba(255, 0, 0, 0.5)";
    return false; 
}

}

function valid(){
    emailvalidate();
    fnamevalidate();
    lnamevalidate();
    phonevalidate();
    matchpass();
    passwordvalid();
    return emailvalidate() && fnamevalidate() && lnamevalidate() && phonevalidate() && matchpass() && passwordvalid();

}