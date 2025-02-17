console.log("Spread operator");
//spread operator with object
const myobj = { name: "Anusha", age: 26, designation: "Developer" };
console.log(myobj);
const newobj = { ...myobj, age: 22 };
console.log(newobj);
//trying with nested object
const myobj1 = {
  name: "Anusha",
  age: 26,
  designation: "Developer",
  address: { city: "banglore", area: "Kodathi", pincode: 560032 },
};
const newobj1 = { ...myobj1, address: { ...myobj1.address, city: "HYD" } };
console.log(newobj1);
console.log(myobj1.address);
//trying with array inside object
const myobj2 = {
  name: "Anusha",
  age: 26,
  designation: "Developer",
  array: ["a", "b", "c"],
};
const newobj2 = {
  ...myobj2,
  array: [...myobj2.array.map((letter) => (letter === "a" ? "Z" : letter))],
};
console.log("updating array", newobj2);

//Spread operator with arrays
const myarr = [true, "anusha", 67, "developer"];
console.log("ARRAY", myarr);
//adding element to the atray
const new_arr = [...myarr, 90];
console.log(new_arr);
//updating the array
const myarr1 = [true, "anusha", 67, "developer"];
const new_arr1 = [...myarr1.map((ele) => (ele === "anusha" ? "ANSUHA" : ele))];
console.log("UPDATING THE ARRAY", new_arr1);
//ARRAY inside object
const myarr2 = [true, "anusha", 67, "developer", { name: "anusha", age: 34 }];
const new_arr2 = myarr2.map((item) =>
  typeof item === "object" ? { ...item, age: 25 } : item
);
console.log("object inside the array", new_arr2);
//trying with nested arrays
const myarr3 = [
  true,
  "anusha",
  67,
  "developer",
  ["ananatpur", "hyd", "banglore"],
];
const new_arr3 = myarr3.map((item) =>
  Array.isArray(item)
    ? [...item.slice(0, 1), "Hyderabad", ...item.slice(2)]
    : item
);
console.log("array inside the array", new_arr3);
/*
map() iterates over myarr3.
If item is an array (Array.isArray(item)):
Create a new array using [...item], ensuring immutability.
Use slice(0, 1) to keep the first element.
Replace the second element ("hyd" → "Hyderabad").
Use slice(2) to keep the remaining elements unchanged.
Non-array items remain unchanged.
*/
