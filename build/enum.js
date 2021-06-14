"use strict";
//enum
//numeric enums
var Month;
(function (Month) {
    Month[Month["JAN"] = 1] = "JAN";
    Month[Month["FEB"] = 100] = "FEB";
    Month[Month["MAR"] = 101] = "MAR";
    Month[Month["APR"] = 102] = "APR";
    Month[Month["MEI"] = 103] = "MEI";
})(Month || (Month = {}));
console.log(Month.FEB);
