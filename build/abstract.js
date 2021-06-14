"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var vehicle = /** @class */ (function () {
    function vehicle() {
    }
    vehicle.prototype.start = function () {
        console.log("brummmmm");
    };
    return vehicle;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.wheels = 4;
        return _this;
    }
    return Car;
}(vehicle));
var Motor = /** @class */ (function (_super) {
    __extends(Motor, _super);
    function Motor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.wheels = 2;
        return _this;
    }
    return Motor;
}(vehicle));
var car = new Car();
console.log(car.wheels);
var motor = new Motor();
console.log(motor.wheels);
motor.start();
