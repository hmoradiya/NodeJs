// here is an object example with some object data and example of function of object
const myData = {
    id : 1,
    school : "Steven Institue of Technology",
    GraduateYear : "2023",
    greet() {
        console.log("How are you?");
    }
}

console.log(myData);
myData.greet();

const extractName = (myData) => {
    console.log("My School name is", myData.school)
}

extractName(myData);