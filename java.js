const name = document.querySelector("#name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const phone = document.querySelector("#phone");
const form = document.querySelector("#form");
// -----------------------------------------------------
name.addEventListener("change", function () {
  console.log(name.value);

});

name.addEventListener("focus", function () {
    console.log("FOCUS");
});
name.addEventListener("input", function () {
    console.log("input");
});
name.addEventListener("blur", function () {
    console.log("J'ai quitté le champ Blur");});

email.addEventListener("change", function () {
  console.log(email.value);

});
password.addEventListener("change", function () {
  console.log(password.value);
  console.log(password.value.length);
});
phone.addEventListener("change", function () {
  console.log(phone.value);
  console.log(phone.value.length);
});

form.addEventListener("submit", function(e) {
  e.preventDefault();
});

//-------------------------------------------------------

