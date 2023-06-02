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