import {Staff} from "./staff";
import {StaffManager} from "./staffManager";
import * as readlineSync from "readline-sync";


let staffManager1: StaffManager = new StaffManager();
let staff = new Staff(2, "Nguyen Thi Lan", 1, 1, 5000, "lan@gamil.com", "03578523458")
let staff2 = new Staff(4, "Nguyen Thi Linh", 2, 1, 5000, "linh@gamil.com", "0363452345")
let staff3 = new Staff(8, "Dinh Lan Anh", 1, 0, 10000, "anh@gamil.com", "0398765123")
let staff4 = new Staff(9, "le Kim Tuyen", 1, 1, 5000, "tuyen@gamil.com", "0357857123")
let staff5 = new Staff(3, "Nguyen Thi Hue", 2, 0, 10000, "hue@gamil.com", "0323456887")
let staff6 = new Staff(1, "Nguyen Thi Huong", 2, 1, 5000, "huong@gamil.com", "0234768945")
let staff7 = new Staff(5, "Ngo Cao", 3, 1, 5000, "cao@gamil.com", "0987612234")
let staff8 = new Staff(6, "Ngo Kim Cương", 1, 0, 10000, "cuong@gamil.com", "032456123")
let staff9 = new Staff(7, "Le Tu Anh", 2, 1, 5000, "tuanh@gamil.com", "0876431233")
let staff10 = new Staff(11, "Nguyen Bao", 2, 0, 10000, "bao@gamil.com", "098723144")
let staff11 = new Staff(10, "Nguyen Van Tai", 1, 1, 5000, "tai@gamil.com", "035412698")


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

let isExist = false;

function menu() {
    console.log('1:Hiển thị danh sách nhân viên có trong công ty')
    console.log('2:Thêm nhân viên mới')
    console.log('3:Hiển thị tiền lương')
    console.log('4:Tìm kiếm nhân viên theo tên')
    console.log('5:Hiển thị tiền lương theo thứ tự tăng dần')
    console.log('6:Nhân viên đã nghỉ')
    console.log('7: Chỉnh sửa')
    console.log('8:Hiển thị danh sách nhân viên theo chức vụ')
    console.log('0:Thoát')
}

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
        case "0":
            break;
    }


}
































































































