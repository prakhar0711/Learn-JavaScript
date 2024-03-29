//classes introduced with ES6
//object-collection of properties and methods
//4 pillars of OOP- Encapsulation, Abstraction, Inheritance, Polymorphism
//.this is very valuable
//****before going furthur try the below****
// const user = {
//   username: "tushar",
//   logInCount: 8,
//   signedIn: true,
//   getUserDetails: function () {
//     console.log(this); //returns the object
//     console.log(`Username:${this.username}`);
//   },
// };

// console.log(user.username);
// user.getUserDetails();
// console.log(this); //returns empty parenthesis

//new keyword is a constructor function it gives you a new instance

/**
 * Represents a user with a username and email
 * @constructor
 * @param {string} username - The username of the user
 * @param {string} email - The email of the user
 */
function UserClass(username, email) {
  this.username = username;
  this.email = email;

  /**
   * Prints the user's email
   */
  this.greetings = function () {
    console.log(`Email : ${this.email}`);
  };
}

const obj = new UserClass("tushar", "abc@gmail.com"); //try without using the new keyword
const obj1 = new UserClass("tushar2", "abc2@gmail.com"); //try without using the new keyword
console.log(obj);
console.log(obj1);

obj.greetings();
obj1.greetings();
