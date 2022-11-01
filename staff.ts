const basicsalary = 500;


export enum Position {
    Manager,
    staff
}

enum Gender {
    MALE,
    FEMALE,
    OTHER,
}

export class Staff {
    private _id: number;
    private _fullName: string = "";
    private _gender: Gender;
    private _position: Position;
    private _salary: number;
    private _email: string = "";
    private _phone: string;


    constructor(id: number,
                fullname: string,
                gender: Gender,
                position: number,
                salary: number,
                email: string,
                phone: string,
    ) {
        this._id = id;
        this._fullName = fullname;
        this._position = position;
        this._salary = salary;
        this._email = email;
        this._phone = phone;
        this._gender = gender;
    }

    getId(): number {
        return this._id;
    }

    setId(value: number) {
        this._id = value;
    }

    getName(): string {
        return this._fullName;
    }

    setName(value: string) {
        this._fullName = value;
    }

    getPosition(): number {
        return this._position;
    }

    setPosition(value: number) {
        this._position = value;
    }

    setEmail(value: string) {
        this._email = value;
    }

    setPhone(value: string) {
        this._phone = value;
    }

    getFullname(): string {
        return this._fullName;
    }

    setGender(value: Gender) {
        this._gender = value;
    }

    getSalary(): number {
        return this._salary
    }

    setSalary(value: number) {
        this._salary = value;
    }


}
