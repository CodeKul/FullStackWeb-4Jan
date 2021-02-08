let firstName = "ABC";
//let firstName = "XYZ";
firstName = "abc";
var firstname = "pqr";
var firstname = "asd";
firstname = "qwe";
console.log(firstname);
console.log(firstName);

//var - global scope,function scope
//let - block scope
//const - block scope
var number = 100;
function print() {
  var lastName = "QWERTY";
  console.log(lastName);
}
print();
console.log(number);

if (number > 0) {
  let i = 5;
  console.log(i);
}
//console.log(i);

let employee = {
  city: "Pune",
  age: 90,
};
console.log(employee.city);
