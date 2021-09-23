const generateBtn = document.querySelector("#generate");

function saveToStorage(element) {
  for (let i = 0; i < Number(element.length); i++) {
    localStorage.setItem(element[i].id, element[i].value);
  }
}

function generateCard() {
  document.querySelector("h2").textContent = localStorage.getItem("fullName");
  document.querySelector("h4").textContent =
    localStorage.getItem("description");
  document.querySelector("#phoneInput").textContent =
    localStorage.getItem("phoneNumber");
  document.querySelector("#addressInput").textContent =
    localStorage.getItem("address");
  document.querySelector("#emailInput").textContent =
    localStorage.getItem("email");
}

generateCard();

generateBtn.addEventListener("click", () => {
  const inputArr = document.querySelectorAll("form input");
  saveToStorage(inputArr);
  generateCard();
});
