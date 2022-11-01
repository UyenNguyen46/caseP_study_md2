"use strict";
exports.__esModule = true;
exports.Staff = exports.Position = void 0;
var basicsalary = 500;
var Position;
(function (Position) {
    Position[Position["Manager"] = 0] = "Manager";
    Position[Position["staff"] = 1] = "staff";
})(Position = exports.Position || (exports.Position = {}));
var Gender;
(function (Gender) {
    Gender[Gender["MALE"] = 0] = "MALE";
    Gender[Gender["FEMALE"] = 1] = "FEMALE";
    Gender[Gender["OTHER"] = 2] = "OTHER";
})(Gender || (Gender = {}));
var Staff = /** @class */ (function () {
    function Staff(id, fullname, gender, position, salary, email, phone) {
        this._fullName = "";
        this._email = "";
        this._id = id;
        this._fullName = fullname;
        this._position = position;
        this._salary = salary;
        this._email = email;
        this._phone = phone;
        this._gender = gender;
    }
    Staff.prototype.getId = function () {
        return this._id;
    };
    Staff.prototype.setId = function (value) {
        this._id = value;
    };
    Staff.prototype.getName = function () {
        return this._fullName;
    };
    Staff.prototype.setName = function (value) {
        this._fullName = value;
    };
    Staff.prototype.getPosition = function () {
        return this._position;
    };
    Staff.prototype.setPosition = function (value) {
        this._position = value;
    };
    Staff.prototype.setEmail = function (value) {
        this._email = value;
    };
    Staff.prototype.setPhone = function (value) {
        this._phone = value;
    };
    Staff.prototype.getFullname = function () {
        return this._fullName;
    };
    Staff.prototype.setGender = function (value) {
        this._gender = value;
    };
    Staff.prototype.getSalary = function () {
        return this._salary;
    };
    Staff.prototype.setSalary = function (value) {
        this._salary = value;
    };
    return Staff;
}());
exports.Staff = Staff;
