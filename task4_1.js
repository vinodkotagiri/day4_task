//How to compare two JSON have the same properties without order?
var obj1 = { name: "Person 1", age:5 };
var obj2 = { age:5, name: "Person 1" };

let compare=JSON.stringify(obj1).split("").sort().join(",") === JSON.stringify(obj2).split("").sort().join(",");
console.log(compare);

