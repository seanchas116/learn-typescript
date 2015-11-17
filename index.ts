import Person = require("./Person");
import actions = require("./actions");

const messageArea = document.getElementById("message");
const greetButton = document.getElementById("greet");
const askBirthdayButton = document.getElementById("askBirthday");

function setMessage(message: string) {
  messageArea.innerHTML = message;
}

const person = {firstName: "Foo", lastName: "Bar"};

greetButton.addEventListener("click", () => {
  setMessage(actions.greet(person));
});
askBirthdayButton.addEventListener("click", () => {
  setMessage(new Date().toString());
});
