import Person = require("./Person");

export
function greet(person: Person) {
  return `Hello, I'm ${person.lastName}`;
}
