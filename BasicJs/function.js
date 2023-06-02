// const is usefull to assign some constant variable that value never change
const studentName = 'Hardik Moradiya';
// let and var is usefull to create some variable and value can be changed further
let age = 23;
const hobby = "Codding";

// here we can change the value of age as it is let
age = 24;

// But if we change value of const it shows error
// hobby = "Reading";

// old way to use function
function studentDetail(studentName, age, hobby) {
    // function return some value
    return ("My name is" + studentName + "." + " I am " + age + " year old." + " And my hobby is " + hobby);
}

// New way to use function -> Arrow Function
const studentDetail = (studentName, age, hobby) => {
    // function return some value
    return ("My name is" + studentName + "." + " I am " + age + " year old." + " And my hobby is " + hobby);
}

console.log(studentDetail(studentName, age, hobby));
