
const messageArea = document.getElementById("message");
const greetButton = document.getElementById("greet");
const askBirthdayButton = document.getElementById("askBirthday");

function setMessage(message: string) {
  messageArea.innerHTML = message;
}

greetButton.addEventListener("click", () => {
  setMessage("Hello!");
});
askBirthdayButton.addEventListener("click", () => {
  setMessage(new Date().toString());
});
