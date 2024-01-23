// singleton
// Object.create

// object literals

const mySym = Symbol("key1");

const JsUser = {
  name: "musfi",
  "full name": "musfirah Saleem",
  [mySym]: "mykey1",
  age: 18,
  location: "Jaipur",
  email: "musfi@google.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "musfi@chatgpt.com";
// Object.freeze(JsUser)
JsUser.email = "musfi@microsoft.com";
// console.log(JsUser);

JsUser.greeting = function () {
  console.log("Hello JS user");
};
JsUser.greetingTwo = function () {
  console.log(`Hello JS user, ${this.name}`);
};

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

// const mysym = Symbol("key1");
// const myobj = {
//   name: "myusfi",
//   email: "musfi@gmail.com",
//   mysym: "key1",
//   age: 23,
// };
// // console.log(myobj);
// // console.log(myobj.email);
// // console.log(myobj["email"]);
// console.log(myobj["mysym"]);
// Object.freeze(myobj);
