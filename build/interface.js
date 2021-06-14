"use strict";
var Asus = /** @class */ (function () {
    function Asus(name, isGaming) {
        this.name = name;
        this.isGaming = isGaming;
    }
    Asus.prototype.on = function () {
        console.log("nyala");
    };
    Asus.prototype.off = function () {
        console.log("mati");
    };
    return Asus;
}());
var MacBook = /** @class */ (function () {
    function MacBook(name, keyboardLight) {
        this.name = name;
        this.keyboardLight = keyboardLight;
    }
    MacBook.prototype.on = function () {
        console.log("nyala macbook");
    };
    MacBook.prototype.off = function () {
        console.log("mati macbook");
    };
    return MacBook;
}());
var asus = new Asus('asus', true);
console.log(asus);
