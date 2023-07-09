// const name = "max";
// let age = 29;
// const hasHobbies = true;

// age = 30;

// const summarizeUser = (userName, userAGe, userHasHobby) => {
//   return "Name is " + userName;
// };s

// // const add = (a,b)=>a+b;

// const addOne = (a) => a + 1;
// const addRandom = () => 1+2;

// console.log(summarizeUser(name, age, hasHobbies));

const person = {
  name: "Max",
  age: 29,
  greet() {
    console.log("hi i am " + this.name);
  },
};

person.greet();
