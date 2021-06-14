function getValue(value:string) {
    return value;
}

console.log(getValue("rasdi abdulrohman").length);
console.log(getValue("rasdi"));


//Generic
function myData<T> (value:T) {
    return value;
}

console.log(myData('rasdi').length);
console.log(myData(123));