function changeGradient() {
  forwardBtn();
  const beforeElement = document.querySelector(".bottom-forward-btn-before");

  console.log(beforeElement);
  if (beforeElement) {
    beforeElement.style.backgroundImage =
      "conic-gradient(#89A1FF 240deg, transparent 120deg)";
  }
}

function forwardBtn() {
  const trackDiv = document.querySelector(".track-goals-div");
  const burnDiv = document.querySelector(".burn-goals-div");

  trackDiv.style.opacity = 0;
  burnDiv.style.opacity = 1;
}

document.addEventListener("DOMContentLoaded", function () {
  const passIn = document.getElementById("password");
  const btn = document.getElementById("togglePassword");
  btn.addEventListener("click", function () {
    const type =
      passIn.getAttribute("type") === "password" ? "text" : "password";
    passIn.setAttribute("type", type);
  });
});

let logincase = "signin";

function handleLoginPage() {
  const loginPage = document.querySelectorAll(".login-div");
  const emailLabel = document.querySelector("[email-label]");

  const passwordLabel = document.querySelector("[password-label]");
  const createAccountPage = document.querySelectorAll(".create-an-account-div");
  if (logincase === "signin") {
    loginPage.forEach((ele) => {
      ele.style.opacity = 1;
      setTimeout(() => {
        ele.classList.remove("hide");
      }, 200);
    });

    createAccountPage.forEach((ele) => {
      ele.style.opacity = 0.5;
      setTimeout(() => {
        ele.classList.add("hide");
      }, 200);
    });
    emailLabel.style.top = "112px";
    passwordLabel.style.top = "180px";

    logincase = "login";
  } else {
    createAccountPage.forEach((ele) => {
      ele.style.opacity = 1;
      setTimeout(() => {
        ele.classList.remove("hide");
      }, 200);
    });

    loginPage.forEach((ele) => {
      ele.style.opacity = 0.5;
      setTimeout(() => {
        ele.classList.add("hide");
      }, 200);
    });

    emailLabel.style.top = "248px";
    passwordLabel.style.top = "315px";
    logincase = "signin";
  }
}

function toggle(element) {
  const toggleCircle = element.querySelector(".toggle-circle");
  if (toggleCircle.style.left === "0.25em") {
    toggleCircle.style.left = "1.75em";
  } else {
    toggleCircle.style.left = "0.25em";
  }
}
function updateCurrentTimeLine() {
  const currentTime = new Date();
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const timeBlockHeight = 32;
  const oneMinuteSpace = timeBlockHeight/60;
  const allCurrentTimeEle = document.querySelectorAll('.current-time');
  allCurrentTimeEle.forEach(ele=>{
    ele.style.display = 'none'
  })
  const positionFromBlockHeight = oneMinuteSpace* minutes; 

  const hourBlock = document.getElementById(`hour-${hours}`);
  if (hourBlock) {
      const hourBlockPosition = hourBlock.offsetTop;
      
      const currentTimeLine = hourBlock.querySelector(".current-time");
      currentTimeLine.style.display = 'block'
      currentTimeLine.style.top = hourBlockPosition + positionFromBlockHeight + "px";
  }
}


setInterval(updateCurrentTimeLine, 60000);


updateCurrentTimeLine();
