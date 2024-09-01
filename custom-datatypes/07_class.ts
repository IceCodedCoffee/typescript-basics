export class User {
    userName: string;
    isAdmin: boolean;
    age: number;

    //optional constructor
    constructor(userName: string, isAdmin: boolean, age: number) {
        this.userName = userName;
        this.isAdmin = isAdmin;
        this.age = age;
    }

    printUserInfo(): void {
        let text: string = this.userName + "has admin rights: ";
        text += this.isAdmin ? "Yes": "No";
        console.log(text);
    }
}