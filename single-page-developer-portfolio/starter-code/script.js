const images = document.querySelectorAll(".project-img-box");
const sendMessage = document.querySelector(".send-message");

images.forEach((image) => {
  image.addEventListener("mouseenter", function (event) {
    const target = event.target;
    const firstChild = target.firstElementChild;
    const secondChild = firstChild.nextElementSibling;
    const thirdChild = secondChild.nextElementSibling;
    firstChild.style.filter = "brightness(20%)";
    secondChild.style.opacity = "1";
    thirdChild.style.opacity = "1";
  });
});

images.forEach((image) => {
  image.addEventListener("mouseleave", function (event) {
    const target = event.target;
    const firstChild = target.firstElementChild;
    const secondChild = firstChild.nextElementSibling;
    const thirdChild = secondChild.nextElementSibling;
    firstChild.style.filter = "brightness(100%)";
    secondChild.style.opacity = "0";
    thirdChild.style.opacity = "0";
  });
});

sendMessage.addEventListener("click", function () {
  const name = document.querySelector("#name");
  const email = document.querySelector("#email");
  const message = document.querySelector("#message");

  const nameBox = document.querySelector(".name-box");
  const emailBox = document.querySelector(".email-box");
  const messageBox = document.querySelector(".message-box");

  if (name.value == "") {
    nameBox.classList.add("wrong");
    nameBox.style.marginBottom = "0rem";
  } else {
    nameBox.classList.add("correct");
    nameBox.style.marginBottom = "3.2rem";
  }

  if (email.value == "" || !/\w+\d*@\w{3,12}\.\w+/.test(email.value)) {
    emailBox.classList.add("wrong");
    emailBox.style.marginBottom = "0rem";
  } else {
    emailBox.classList.add("correct");
    emailBox.style.marginBottom = "3.2rem";
  }

  if (message.value == "") {
    messageBox.classList.add("wrong");
    messageBox.style.marginBottom = "0rem";
  } else {
    messageBox.classList.add("correct");
    messageBox.style.marginBottom = "3.2rem";
  }
});
