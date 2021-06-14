"use strict";
// export class User {
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
//     constructor(
//         public name:string,
//         public age:number,
//         public alamat:string
//         ) {
//     }
// }
// let user = new User("rasdi abdulrohman",25, "bogor");
// export class Siswa {
//     constructor(public name:string, private kelas:string){
//     }
// }
// let siswa = new Siswa("rasdi abdulrohman","8D");
// // console.log(siswa);
// export class Mahasiswa {
//     constructor(
//         public name:string,
//         public angkatan:number,
//         public jurusan:string
//     ){
//     }
// }
// let mahasiswa = new Mahasiswa("rasdi",2016,'teknik informatika');
// console.log (mahasiswa);
//inheritens
var User = /** @class */ (function () {
    function User(name, age) {
        var _this = this;
        this.age = age;
        this.getName = function () {
            return _this.name;
        };
        this.name = name;
    }
    User.prototype.setName = function (value) {
        this.name = value;
    };
    return User;
}());
exports.User = User;
//public = bisa diakses disemua kelas
// protected = hanya bisa diaksess dari kelas tersebut dan kelas turunannya
// private = hanya bisa diakses dari class itu sendiri
//setter dan getter
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin(phone, name, age) {
        var _this = _super.call(this, name, age) || this;
        _this.read = true;
        _this.write = true;
        _this._email = "";
        _this.phone = phone;
        return _this;
    }
    Admin.getNameRole = function () {
        return "hei rasdi";
    };
    Admin.prototype.getRole = function () {
        return {
            read: this.read,
            write: this.write
        };
    };
    ;
    Object.defineProperty(Admin.prototype, "email", {
        get: function () {
            return this._email;
        },
        set: function (value) {
            if (value.length < 5) {
                this.email = "email salah";
            }
            else {
                this._email = value;
            }
        },
        enumerable: false,
        configurable: true
    });
    Admin.getROleName = "Admin 1";
    return Admin;
}(User));
var hello = Admin.getNameRole();
console.log(hello);
