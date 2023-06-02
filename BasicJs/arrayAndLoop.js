const hobby = ["Reading", "Codding"];


// data print using loop
for (let h of hobby) {
    console.log(h);
}

// data print using map function
console.log(hobby.map(h => {
    return h;
}));

// add data in array
hobby.push("Programming");
console.log("Add data in array : ", hobby);

// coppy array
const copyHobby = hobby.slice();
// here slice can add data range from origial Array, also it can cut specific index of array
console.log("Coppied Array: ", copyHobby);

// copy array data using spread syntax
const copyHobbyRange = [...hobby];
console.log("Coppied Array using spread syntax : ", copyHobby);