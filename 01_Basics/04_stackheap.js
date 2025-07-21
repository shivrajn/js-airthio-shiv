//Stack vs Heap Memory in JavaScript
// Stack memory is used for static memory allocation and stores primitive values.
// Heap memory is used for dynamic memory allocation and stores objects, arrays, and functions.
let a = 10; // primitive value stored in stack memory
let b = a; // b is a copy of a, also stored in stack memory
b = 20; // changing b does not affect a
console.log(a); // 10
console.log(b); // 20

/*****************Heap memory example**************************/

let obj1 = { name: "shivraj" }; // object stored in heap memory
let obj2 = obj1; // obj2 references the same object in heap memory
obj2.name = "Mehul"; // changing obj2 affects obj1 since they reference the same object
console.log(obj1.name); // Mehul
console.log(obj2.name); // Mehul

// Primitive types are stored in stack memory, while reference types (objects, arrays) are stored in heap memory.

// Example of reference type

let arr1 = [1, 2, 3]; // array stored in heap memory
let arr2 = arr1; // arr2 references the same array in heap memory
arr2[0] = 10; // changing arr2 affects arr1 since they reference the same array
console.log(arr1); // [10, 2, 3]
console.log(arr2); // [10, 2, 3]

// Example of primitive type with string
let str1 = "Hello"; // string stored in stack memory
let str2 = str1; // str2 is a copy of str1, also stored
// in stack memory
str2 = "World"; // changing str2 does not affect str1
console.log(str1); // Hello
console.log(str2); // World

// Example of reference type with object
let obj3 = { key: "value" }; // object stored in heap memory
let obj4 = obj3; // obj4 references the same object in heap memory
obj4.key = "newValue"; // changing obj4 affects obj3 since they reference the same object
console.log(obj3.key); // newValue
console.log(obj4.key); // newValue

// Example of primitive type with boolean
let bool1 = true; // boolean stored in stack memory
let bool2 = bool1; // bool2 is a copy of bool1, also stored
// in stack memory
bool2 = false; // changing bool2 does not affect bool1
console.log(bool1); // true
console.log(bool2); // false

// Example of reference type with boolean
let boolObj1 = { value: true }; // object stored in heap memory
let boolObj2 = boolObj1; // boolObj2 references the same object in heap memory
boolObj2.value = false; // changing boolObj2 affects boolObj1 since they
// reference the same object
console.log(boolObj1.value); // false
console.log(boolObj2.value); // false


let Aname = "shivraj"
let anothername = Aname
anothername = "Mehul"

console.log(Aname);
console.log(anothername);


let Aobj =  {firstname: "shivraj",
    Lastname :"Nalawade"
}
let anotherA = Aobj
anotherA.firstname = "Rutu"
anotherA.Lastname = "Patil"
console.log(anotherA.firstname);
console.log(Aobj.firstname, Aobj.Lastname);

