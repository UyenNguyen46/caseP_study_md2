"use strict";
exports.__esModule = true;
exports.StaffManager = void 0;
var readlineSync = require("readline-sync");
var StaffManager = /** @class */ (function () {
    function StaffManager() {
        this.staffs = [];
    }
    StaffManager.prototype.add = function (staff) {
        this.staffs.push(staff);
    };
    StaffManager.prototype.showList = function () {
        return this.staffs;
    };
    StaffManager.prototype.showByPosition = function (position) {
        var positions = [];
        for (var i = 0; i < this.staffs.length; i++) {
            if (this.staffs[i].getPosition() == position) {
                positions.push(this.staffs[i]);
            }
        }
        return positions;
    };
    StaffManager.prototype.searchByName = function (name) {
        var names = [];
        for (var i = 0; i < this.staffs.length; i++) {
            if (this.staffs[i].getName() == name) {
                names.push(this.staffs[i]);
            }
        }
        return names;
    };
    StaffManager.prototype.showSalarry = function () {
        for (var i = 0; i < this.staffs.length; i++) {
            console.log(this.staffs[i].getFullname() + "  : " + this.staffs[i].getSalary());
        }
    };
    StaffManager.prototype.sortSalary = function () {
        for (var i = 0; i < this.staffs.length - 1; i++) {
            for (var j = 0; j < this.staffs.length - i - 1; j++) {
                if (this.staffs[j].getSalary() > this.staffs[j + 1].getSalary()) {
                    var temp = this.staffs[j];
                    this.staffs[j] = this.staffs[j + 1];
                    this.staffs[j + 1] = temp;
                }
            }
        }
        this.showSalarry();
    };
    StaffManager.prototype["delete"] = function (name) {
        var resigns = [];
        for (var i = 0; i < this.staffs.length; i++) {
            if (this.staffs[i].getFullname() == name) {
                console.table(this.staffs[i]);
                resigns.push(this.staffs.splice(i, 1));
            }
        }
    };
    StaffManager.prototype.edit = function (id) {
        for (var i = 0; i < this.staffs.length; i++) {
            if (this.staffs[i].getId() == id) {
                var email = readlineSync.question('Nhap email moi: ');
                var re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
                for (;;) {
                    // @ts-ignore
                    if (re.exec(email) == null) {
                        console.log("mail sai");
                        email = readlineSync.question('Nhap mail: ');
                    }
                    else
                        break;
                }
                this.staffs[i].setEmail(email);
                this.staffs[i].setName(readlineSync.question('Nhap ten moi: '));
                this.staffs[i].setId(+readlineSync.question('Nhap id moi: '));
                var phone = readlineSync.question('Nhap so dien thoai moi: ');
                var reg = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
                for (;;) {
                    // @ts-ignore
                    if (reg.exec(phone) == null) {
                        console.log("phone sai");
                        phone = readlineSync.question('Nhap so dien thoai: ');
                    }
                    else {
                        break;
                    }
                }
                this.staffs[i].setPhone(phone);
                this.staffs[i].setGender(+readlineSync.question('Nhap gioi tinh moi: '));
                this.staffs[i].setPosition(+readlineSync.question('Nhap chuc vu moi: '));
                this.staffs[i].setSalary(+readlineSync.question('Nhap tien luong moi: '));
                return this.staffs[i];
            }
        }
    };
    return StaffManager;
}());
exports.StaffManager = StaffManager;
