"use strict";
exports.__esModule = true;
var staff_1 = require("./staff");
var staffManager_1 = require("./staffManager");
var readlineSync = require("readline-sync");
var staffManager1 = new staffManager_1.StaffManager();
var staff = new staff_1.Staff(2, "Nguyen Thi Lan", 1, 1, 5000, "lan@gamil.com", "03578523458");
var staff2 = new staff_1.Staff(4, "Nguyen Thi Linh", 2, 1, 5000, "linh@gamil.com", "0363452345");
var staff3 = new staff_1.Staff(8, "Dinh Lan Anh", 1, 0, 10000, "anh@gamil.com", "0398765123");
var staff4 = new staff_1.Staff(9, "le Kim Tuyen", 1, 1, 5000, "tuyen@gamil.com", "0357857123");
var staff5 = new staff_1.Staff(3, "Nguyen Thi Hue", 2, 0, 10000, "hue@gamil.com", "0323456887");
var staff6 = new staff_1.Staff(1, "Nguyen Thi Huong", 2, 1, 5000, "huong@gamil.com", "0234768945");
var staff7 = new staff_1.Staff(5, "Ngo Cao", 3, 1, 5000, "cao@gamil.com", "0987612234");
var staff8 = new staff_1.Staff(6, "Ngo Kim Cương", 1, 0, 10000, "cuong@gamil.com", "032456123");
var staff9 = new staff_1.Staff(7, "Le Tu Anh", 2, 1, 5000, "tuanh@gamil.com", "0876431233");
var staff10 = new staff_1.Staff(11, "Nguyen Bao", 2, 0, 10000, "bao@gamil.com", "098723144");
var staff11 = new staff_1.Staff(10, "Nguyen Van Tai", 1, 1, 5000, "tai@gamil.com", "035412698");
staffManager1.add(staff);
staffManager1.add(staff2);
staffManager1.add(staff3);
staffManager1.add(staff4);
staffManager1.add(staff5);
staffManager1.add(staff6);
staffManager1.add(staff7);
staffManager1.add(staff8);
staffManager1.add(staff9);
staffManager1.add(staff10);
staffManager1.add(staff11);
var isExist = false;
function menu() {
    console.log('1:Hiển thị danh sách nhân viên có trong công ty');
    console.log('2:Thêm nhân viên mới');
    console.log('3:Hiển thị tiền lương');
    console.log('4:Tìm kiếm nhân viên theo tên');
    console.log('5:Hiển thị tiền lương theo thứ tự tăng dần');
    console.log('6:Nhân viên đã nghỉ');
    console.log('7: Chỉnh sửa');
    console.log('8:Hiển thị danh sách nhân viên theo chức vụ');
    console.log('0:Thoát');
}
while (!isExist) {
    menu();
    var number = readlineSync.question('Chon chuc nang: ');
    switch (number) {
        case "1":
            console.table(staffManager1.showList());
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
            staffManager1.add(staff12);
            staffManager1.showList();
            console.table(staffManager1.showList());
            break;
        case "3":
            staffManager1.showSalarry();
            break;
        case "4":
            console.table(staffManager1.searchByName(readlineSync.question("nhap ten can tim: ")));
            break;
        case "5":
            staffManager1.sortSalary();
            break;
        case "6":
            staffManager1["delete"](readlineSync.question("Nhap ten can xoa: "));
            console.table(staffManager1.showList());
            break;
        case "7":
            var id1 = +readlineSync.question('Nhap id1 muon sua:');
            console.table(staffManager1.edit(id1));
            break;
        case "8":
            console.table(staffManager1.showByPosition(readlineSync.question('Nhap chuc vu:')));
            break;
        case "0":
            break;
    }
}
