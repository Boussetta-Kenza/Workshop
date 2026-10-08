const name = document.querySelector("#name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const phone = document.querySelector("#phone");
const form = document.querySelector("#form");
const passwordRegEx = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/);
const phoneRegEx = new RegExp(/^[0-9]+$/);
const btnForm = document.querySelector("#btnForm");
// -----------------------------------------------------
name.addEventListener("input", function () {
  console.log(name.value);
 if (name.value.length < 5) 
  {    
    name.style.border = "2px solid red";
    }
 else { name.style.border = "2px solid green";
  }
});
name.addEventListener("focus", function () {
    console.log("FOCUS");
});

name.addEventListener("blur", function () {
    console.log("J'ai quitté le champ Blur");});

email.addEventListener("change", function () {
  console.log(email.value);
  if (!email.value.includes("@")) 
    {
    alert("Email invalide");
    email.setAttribute("class", "form-control is-invalid");
    email.focus();
    }
});
password.addEventListener("input", function () {
  console.log(password.value);
  console.log(password.value.length);
  if (!passwordRegEx.test(password.value)) {
    password.setAttribute("class", "form-control is-invalid");
  } else {
    password.setAttribute("class", "form-control is-valid");
  }
});
phone.addEventListener("input", function () {
  console.log(phone.value);
  console.log(phone.value.length);
  if (!phoneRegEx.test(phone.value) || phone.value.length !== 8) 
    {
    phone.setAttribute("class", "form-control is-invalid");
  } 
  else {
    phone.setAttribute("class", "form-control is-valid");
  }
});

form.addEventListener("submit", function(e) {
  e.preventDefault();
});

//-------------------------------------------------------
