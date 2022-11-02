"use strict";
exports.__esModule = true;
exports.menu = void 0;
var staff_1 = require("./staff");
var readlineSync = require("readline-sync");
var main_1 = require("./main");
function menu() {
    console.log('1:Hiển thị danh sách nhân viên có trong công ty');
    console.log('2:Thêm nhân viên mới');
    console.log('3:Hiển thị tiền lương');
    console.log('4:Tìm kiếm nhân viên theo tên');
    console.log('5:Hiển thị tiền lương theo thứ tự tăng dần');
    console.log('6:Nhân viên đã nghỉ');
    console.log('7: Chỉnh sửa');
    console.log('8:Hiển thị danh sách nhân viên theo chức vụ');
    console.log('9: Tính lương');
    console.log('0:Thoát');
}
exports.menu = menu;
var isExist = false;
while (!isExist) {
    menu();
    var number = readlineSync.question('Chon chuc nang: ');
    switch (number) {
        case "1":
            console.table(main_1.staffManager1.showList());
            break;
        case "2":
            var id = readlineSync.question('Nhap id: ');
            var fullname = readlineSync.question('Nhap ho ten: ');
            var gender = readlineSync.question('Nhap gioi tinh: ');
            var position = readlineSync.question('Nhap chuc vu: ');
            var salary = readlineSync.question('Nhap tien luong: ');
            var email = readlineSync.question('Nhap mail: ');
            var re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
            for (;;) {
                if (re.exec(email) == null) {
                    console.log("mail sai");
                    email = readlineSync.question('Nhap mail: ');
                }
                else
                    break;
            }
            var phone = readlineSync.question('Nhap so dien thoai: ');
            var reg = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
            for (;;) {
                if (reg.exec(phone) == null) {
                    console.log("phone sai");
                    phone = readlineSync.question('Nhap so dien thoai: ');
                }
                else {
                    break;
                }
            }
            var staff12 = new staff_1.Staff(id, fullname, gender, position, salary, email, phone);
            main_1.staffManager1.add(staff12);
            main_1.staffManager1.showList();
            console.table(main_1.staffManager1.showList());
            break;
        case "3":
            main_1.staffManager1.showSalarry();
            break;
        case "4":
            console.table(main_1.staffManager1.searchByName(readlineSync.question("nhap ten can tim: ")));
            break;
        case "5":
            main_1.staffManager1.sortSalary();
            break;
        case "6":
            main_1.staffManager1["delete"](readlineSync.question("Nhap ten can xoa: "));
            console.table(main_1.staffManager1.showList());
            break;
        case "7":
            var id1 = +readlineSync.question('Nhap id1 muon sua:');
            console.table(main_1.staffManager1.edit(id1));
            break;
        case "8":
            console.table(main_1.staffManager1.showByPosition(readlineSync.question('Nhap chuc vu:')));
            break;
        case "9":
            console.table(main_1.staffManager1.salary());
        case "0":
            break;
    }
}
