import {Staff} from "./staff";
import {StaffManager} from "./staffManager";
import * as readlineSync from "readline-sync";
import {menu} from './menu'


 export let staffManager1: StaffManager = new StaffManager();
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

menu()


































