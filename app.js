const form = document.getElementById("form");
const username = document.getElementById("username");
const password = document.getElementById("password");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkData();
});

function checkData() {
  const usernameValue = username.value.trim();
  const passwordValue = password.value.trim();

  if (usernameValue === "") {
    setErrorfor(username, "please enter username!!");
  } else {
    setSuccessfor(username);
  }

  if (passwordValue === "") {
    setErrorfor(password, "please enter Password!!");
  } else {
    setSuccessfor(password);
  }
}

function setErrorfor(input, massage) {
  const control = input.parentElement;
  const small = control.querySelector("small");

  small.innerText = massage;
  control.className = "form-control erorr";
}

function setSuccessfor(input, massage) {
  const control = input.parentElement;
  const small = control.querySelector("small");

  small.innerText = massage;
  control.className = "form-control success";
}
