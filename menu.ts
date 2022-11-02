import {Staff} from "./staff";
import * as readlineSync from "readline-sync";
import {staffManager1} from "./main";

 export function menu() {
    console.log('1:Hiển thị danh sách nhân viên có trong công ty')
    console.log('2:Thêm nhân viên mới')
    console.log('3:Hiển thị tiền lương')
    console.log('4:Tìm kiếm nhân viên theo tên')
    console.log('5:Hiển thị tiền lương theo thứ tự tăng dần')
    console.log('6:Nhân viên đã nghỉ')
    console.log('7: Chỉnh sửa')
    console.log('8:Hiển thị danh sách nhân viên theo chức vụ')
    console.log('9: Tính lương')
    console.log('0:Thoát')
}
let isExist = false;

while (!isExist) {
    menu();
    let number = readlineSync.question('Chon chuc nang: ');
    switch (number) {
        case "1":
            console.table(staffManager1.showList());
            break;
        case "2":
            let id = readlineSync.question('Nhap id: ');
            let fullname = readlineSync.question('Nhap ho ten: ');
            let gender = readlineSync.question('Nhap gioi tinh: ');
            let position = readlineSync.question('Nhap chuc vu: ');
            let salary = readlineSync.question('Nhap tien luong: ');
            let email = readlineSync.question('Nhap mail: ');
            let re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
            for (; ;) {
                if (re.exec(email) == null) {
                    console.log("mail sai");
                    email = readlineSync.question('Nhap mail: ');
                } else break;

            }
            let phone = readlineSync.question('Nhap so dien thoai: ');
            let reg = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/
            for (; ;) {
                if (reg.exec(phone) == null) {
                    console.log("phone sai");
                    phone = readlineSync.question('Nhap so dien thoai: ');
                } else {
                    break;
                }
            }
            let staff12 = new Staff(id, fullname, gender, position, salary, email, phone)
            staffManager1.add(staff12);
            staffManager1.showList()
            console.table(staffManager1.showList());
            break;
        case "3":
            staffManager1.showSalarry()
            break;
        case "4":
            console.table(staffManager1.searchByName(readlineSync.question("nhap ten can tim: ")))
            break;
        case "5":
            staffManager1.sortSalary();
            break;
        case "6":
            staffManager1.delete(readlineSync.question("Nhap ten can xoa: "));
            console.table(staffManager1.showList())
            break;
        case "7":
            let id1 : number = + readlineSync.question('Nhap id1 muon sua:');
            console.table(staffManager1.edit(id1))
            break;
        case "8":
            console.table(staffManager1.showByPosition(readlineSync.question('Nhap chuc vu:')))
            break;
        case  "9":
            console.table(staffManager1.salary())
        case "0":
            break;
    }


}