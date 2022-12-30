
/*An object is a collection of properties
Each property has a value*/

var person = {
    firstName: "David", age: 19,
    isFemale: false,
    balance: 100.20,
    dob: new Date(1992, 2, 30).toJSON(),
    address: {
        city:"London",
        postCode: "SW9" 
    }
};
console.log(person.firstName);
console.log(person.age);
console.log(person.isFemale);
console.log(person.dob);

//To access the nexted object see ouput below
console.log(person.address.city);
console.log(person.address.postCode);
console.log(Object.values(person));
console.log(JSON.stringify(person));
