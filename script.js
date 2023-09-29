const registerbtn=document.querySelector(".registers")
const loginbtn=document.querySelector(".logins")
const registerform=document.querySelector(".register-form")
const loginform=document.querySelector(".login-form")
const btn=document.querySelector(".btn")
const login=document.getElementById("login").value
const parol=document.getElementById("parol").value

loginform.style.display="none"
registerbtn.style.borderBottom="5px solid blue"
registerbtn.addEventListener('click', ()=>{
    registerbtn.style.borderBottom="5px solid blue"
    loginbtn.style.border="none"
loginform.style.display="none"
registerform.style.display="block"
})
loginbtn.addEventListener('click', ()=>{
    registerbtn.style.border="none"
    loginbtn.style.borderBottom="5px solid blue"
    registerform.style.display="none"
    loginform.style.display="block"
    btn.addEventListener('click', ()=>{
        if(login=="John" && parol =="John_smit"){
            console.log("true");
        }
        else{
            console.log("false");
        }
    })
    })
registerbtn.style.borderbottom="5px solid blue"