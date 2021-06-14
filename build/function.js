"use strict";
//tipe data function
function getName() {
    return "hello , my name is rasdi";
}
function getAge() {
    return 12;
}
function printName() {
}
console.log(getName());
//functin argument
function multiple(val1, val2) {
    return val1 * val2;
}
var result = multiple(10, 5);
console.log(result);
var Add = function (val1, val2) {
    return val1 + val2;
};
console.log(Add(6, 10));
var Hello = 10;
var getNama = function (val1, val2) {
    return val1 + " hello " + val2;
};
console.log(getNama("rasdi", "abdul"));
//default parameters
var fullName = function (first, last) {
    if (last === void 0) { last = "abdulrohman"; }
    return first + "test " + last;
};
console.log(fullName("rasdi "));
//opsional parameters
var getAlamat = function (nilai1, nilai2) {
    return nilai1 + nilai2;
    // return nilai1 + " " +nilai2;
};
console.log(getAlamat(20, 30));
