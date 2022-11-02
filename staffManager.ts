import {Position, Staff} from "./staff";
import * as readlineSync from "readline-sync";

export class StaffManager {
    staffs: Staff[] = []

    constructor() {
    }

    add(staff: Staff) {
        this.staffs.push(staff)
    }

    showList() {
        return this.staffs
    }

    showByPosition(position) {
        let positions = []
        for (let i = 0; i < this.staffs.length; i++) {
            if (this.staffs[i].getPosition() == position) {
                positions.push(this.staffs[i]);
            }
        }
        return positions;
    }

    searchByName(name: string) {
        let names = []
        for (let i = 0; i < this.staffs.length; i++) {
            if (this.staffs[i].getName() == name) {
                names.push(this.staffs[i]);
            }
        }
        return names;
    }

    showSalarry() {
        for (let i = 0; i < this.staffs.length; i++) {
            console.log(this.staffs[i].getFullname() + "  : " + this.staffs[i].getSalary());
        }
    }

    sortSalary() {
        for (let i = 0; i < this.staffs.length - 1; i++) {
            for (let j = 0; j < this.staffs.length - i - 1; j++) {
                if (this.staffs[j].getSalary() > this.staffs[j + 1].getSalary()) {
                    let temp = this.staffs[j];
                    this.staffs[j] = this.staffs[j + 1];
                    this.staffs[j + 1] = temp;
                }
            }

        }
        this.showSalarry()
    }

    delete(name) {
        let resigns = [];
        for (let i = 0; i < this.staffs.length; i++) {
            if (this.staffs[i].getFullname() == name) {
                console.table(this.staffs[i]);
                resigns.push(this.staffs.splice(i, 1));
            }
        }
    }
    edit(id){
        for (let i =0; i<this.staffs.length;i++){
            if (this.staffs[i].getId() == id){
                let email = readlineSync.question('Nhap email moi: ');
                let re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
                for (; ;) {
                    // @ts-ignore
                    if (re.exec(email) == null) {
                        console.log("mail sai");
                        email = readlineSync.question('Nhap mail: ');
                    } else break;

                }
                this.staffs[i].setEmail(email);
                this.staffs[i].setName(readlineSync.question('Nhap ten moi: '));
                this.staffs[i].setId(+readlineSync.question('Nhap id moi: '));
                let phone = readlineSync.question('Nhap so dien thoai moi: ');
                let reg = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/
                for (; ;) {
                    // @ts-ignore
                    if (reg.exec(phone) == null) {
                        console.log("phone sai");
                        phone = readlineSync.question('Nhap so dien thoai: ');
                    } else {
                        break;
                    }
                }
                this.staffs[i].setPhone(phone);
                this.staffs[i].setGender(+readlineSync.question('Nhap gioi tinh moi: '));
                this.staffs[i].setPosition(+readlineSync.question('Nhap chuc vu moi: '));
                this.staffs[i].setSalary(+readlineSync.question('Nhap tien luong moi: '));
                return this.staffs[i]
            }
        }
    }
    salary(): number{
        let id = readlineSync.question('nhap id: ')
        let defaultworkingdays = 26;
        let workingdays = +readlineSync.question('Nhap so ngay di lam: ')
        for (let i = 0; i< this.staffs.length; i++) {
            return (this.staffs[i].getSalary()/defaultworkingdays) * workingdays
        }
    }


}