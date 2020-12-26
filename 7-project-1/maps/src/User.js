"use strict";
exports.__esModule = true;
exports.User = void 0;
// @ts-ignore
var faker_1 = require("faker");
var User = /** @class */ (function () {
    function User() {
        this.name = faker_1["default"].name.findName(1);
        this.location = {
            lat: parseFloat(faker_1["default"].address.latitude()),
            lng: parseFloat(faker_1["default"].address.longitude())
        };
    }
    return User;
}());
exports.User = User;
