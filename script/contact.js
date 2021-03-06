const App = () => {
  const name_feild = document.querySelector("#user-name");
  const email_feild = document.querySelector("#user-email");

  const message = document.querySelector("#message-box");
  const submit = document.querySelector(".submit-button");
  const error_message = (msg, className) => {
    document.querySelector(`${className} .err-text`).innerHTML = msg;
    document.querySelector(`${className}`).classList.add("exclamation");
    document.querySelector(`${className}`).classList.remove("check-box");
  };
  const correct = (className) => {
    document.querySelector(`${className} .err-text`).innerHTML = "";
    document.querySelector(`${className}`).classList.add("check-box");
    document.querySelector(`${className}`).classList.remove("exclamation");
  };

  const nameError = (err_msg) => {
    name_feild.style.border = "solid 2px #FF3333";

    error_message(err_msg, ".name-container");
  };

  const nameCorrect = () => {
    name_feild.style.border = "solid 2px #66FF66";

    correct(".name-container");
  };

  const checkName = () => {
    if (name_feild.value.length === 0) {
      nameError("Required *");
      return false;
    } else if (name_feild.value.length > 40) {
      nameError("Name cannot be more than 40 characters");
      return false;
    } else {
      nameCorrect();
      return true;
    }
  };
  const emailError = (err_msg) => {
    error_message(err_msg, ".email-container");

    email_feild.style.border = "solid 2px #FF3333";
  };
  const emailCorrect = () => {
    email_feild.style.border = "solid 2px #66FF66";

    correct(".email-container");
  };
  const checkEmail = () => {
    const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email_feild.value.length === 0) {
      emailError("Required *");
      return false;
    } else if (!email_feild.value.match(re)) {
      emailError("Not a valid email");
      return false;
    } else {
      emailCorrect();
      return true;
    }
  };
  const noMessage = () => {
    message.style.border = "solid 2px #FF3333";
    document.querySelector(".message-container .err-text").innerHTML =
      "Please enter a message";
  };
  const emptyForm = () => {
    document
      .querySelector("#contacts-section")
      .scrollIntoView({ behavior: "smooth" });
    nameError("Required *");
    emailError("Required *");
    noMessage();
  };
  const validate = () => {
    if (
      name_feild.value.length === 0 &&
      email_feild.value.length === 0 &&
      message.value.length === 0
    ) {
      emptyForm();
      return false;
    } else if (!checkName()) {
      return false;
    } else if (!checkEmail()) {
      return false;
    } else if (message.value.length === 0) {
      noMessage();
      return false;
    } else {
      return true;
    }
  };
  const sendMessage = () => {
    document
      .querySelector("form")
      .setAttribute("action", "https://formsubmit.co/bivasdas911@gmail.com");
    document.querySelector("form").setAttribute("method", "POST");
  };
  submit.addEventListener("click", (e) => {
    if (!validate()) {
      e.preventDefault();
      document
        .querySelector(".contacts")
        .scrollIntoView({ behavior: "smooth" });
    } else {
      sendMessage();
    }
  });
  name_feild.addEventListener("input", checkName);
  email_feild.addEventListener("input", checkEmail);
  message.addEventListener("input", () => {
    message.style.border = "none";
    document.querySelector(".message-container .err-text").innerHTML = "";
  });
};

App();
