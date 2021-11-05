// function onFormSubmit(event) {
//   event.preventDefault();
//   const email = event.currentTarget.elements.email.value;
//   const value = event.currentTarget.elements.password.value;

//   if ((email && value) !== "") {
//     const formData = new FormData(event.currentTarget);
//     formData.forEach((value, name) => {
//       formData[`${name}`] = value;
//     });
//     console.log(formData);
//     formEl.reset();
//   } else {
//     return alert("Все поля должны быть заполнены!");
//   }
// }

const formEl = document.querySelector(".login-form");
const btnEl = formEl.querySelector("button");

formEl.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const email = event.currentTarget.elements.email.value;
  const value = event.currentTarget.elements.password.value;

  if ((email && value) === "") {
    return alert("Все поля должны быть заполнены!");
  }
  const formData = {
    email,
    value,
  };
  console.log(formData);
  formEl.reset();
}


