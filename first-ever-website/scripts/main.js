const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/adam-god.jpg") {
    myImage.setAttribute("src", "images/school-of-athens.jpg");
  } else {
    myImage.setAttribute("src", "images/adam-god.jpg");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");
  localStorage.setItem("name", myName);
  myHeading.textContent = `What is your meaning of life, ${myName}?`;
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `What is your meaning of life, ${storedName}?`;
}

myButton.onclick = () => {
  setUserName();
};