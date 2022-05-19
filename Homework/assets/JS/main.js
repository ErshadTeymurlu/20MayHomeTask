let btnSubmit = document.querySelector(".btn-submit");
let loginWrapper = document.querySelector(".login-wrapper");
let loginInputs = document.querySelectorAll(".login-wrapper input");
let personalInfo = document.querySelector(".personal-info");
let Name;
let Surname;
let FatherName;
let Age;
btnSubmit.addEventListener("click",(e)=>{
    loginWrapper.classList.add("d-none");
    personalInfo.classList.remove("d-none");
    for(let i = 0; i<loginInputs.length;i++){
        if(!loginInputs[i].value.trim()==""){
            let inputData = `<p>${loginInputs[i].value}</p>`;
            personalInfo.innerHTML +=inputData;
        }
    }
})