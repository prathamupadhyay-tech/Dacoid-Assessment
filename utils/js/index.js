const URL = "https://precious-valkyrie-3c2b03.netlify.app";
const URL2 = "https://precious-valkyrie-3c2b03.netlify.app";
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

let logincase = "signin";

function handleLoginPage() {
  passwordShowFunction("log-in");
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

window.onload = function () {
  if (window.location.href === `${URL}/workOutSchedule`) {
    populateWorkOutSchedule();
    setInterval(updateCurrentTimeLine, 60000);

    updateCurrentTimeLine();
  } else if (window.location.href === `${URL}/createAccountPage`) {
    passwordShowFunction("sign-in");
    const inputFields = document.querySelectorAll(
      "input[type='text'], input[type='password']"
    );
    inputFields.forEach((input) => {
      input.value = "";
    });
  }
};

function passwordShowFunction(show) {
  console.log(show);
  const passIn = document.getElementById(`${show}-password`);
  const btn = document.getElementById(`${show}-togglePassword`);
  btn.addEventListener("click", function () {
    const type =
      passIn.getAttribute("type") === "password" ? "text" : "password";
    passIn.setAttribute("type", type);
  });
}

const workOutSchedule = [
  {
    name: "Ab work out",
    time: "7:30am",
  },
  {
    name: "Upper Body Workout",
    time: "9:00am",
  },
  {
    name: "Lower Body Workout",
    time: "3:00am",
  },
];

function populateWorkOutSchedule() {
  workOutSchedule.forEach((data) => {
    const timeString = data.time;
    const date = new Date("2000-01-01 " + timeString); // Use an arbitrary date with the time string
    const hour = date.getHours();
    const minutes = date.getMinutes();
    const timeBlockHeight = 32;
    const oneMinuteSpace = timeBlockHeight / 60;
    const positionFromBlockHeight = oneMinuteSpace * minutes;
    const hourBlock = document.getElementById(`hour-${hour}`);
    if (hourBlock) {
      const hourBlockPosition = hourBlock.offsetTop;

      const workoutElement = document.createElement("div");
      workoutElement.classList.add("workout-schedule");
      workoutElement.classList.add(
        "p-4",
        "absolute",
        "right-[1em]",
        "top-[65px]",
        "w-[60%]",
        "rounded-full",
        "h-2",
        "flex",
        "justify-center",
        "items-center",
        "text-[white]",
        "bg-gradient-to-l",
        "from-[#D3A4F4]",
        "to-[#E9B1E0]"
      );
      workoutElement.style.top =
        hourBlockPosition + positionFromBlockHeight + "px";
      workoutElement.innerHTML = `<p class="text-[12px]">${data.name}, ${data.time}</p>`;

      hourBlock.appendChild(workoutElement);
    }
  });
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
  const oneMinuteSpace = timeBlockHeight / 60;
  const allCurrentTimeEle = document.querySelectorAll(".current-time");
  allCurrentTimeEle.forEach((ele) => {
    ele.style.display = "none";
  });
  const positionFromBlockHeight = oneMinuteSpace * minutes;

  const hourBlock = document.getElementById(`hour-${hours}`);
  if (hourBlock) {
    const hourBlockPosition = hourBlock.offsetTop;

    const currentTimeLine = hourBlock.querySelector(".current-time");
    currentTimeLine.style.display = "block";
    currentTimeLine.style.top =
      hourBlockPosition + positionFromBlockHeight + "px";
  }
}

function removeLabel(currentElement, element) {
  const labelElement = document.querySelector(`.${element}`);
  labelElement.style.display = "none";
}
function addLabel(currentElement, element) {
  if (!currentElement.value) {
    const labelElement = document.querySelector(`.${element}`);
    labelElement.style.display = "block";
  }
}
