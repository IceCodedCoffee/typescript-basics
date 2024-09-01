class Permission {
    frontend: boolean = false;
    backend: boolean = false;

    constructor(_frontend: boolean, _backend: boolean) {
        this.frontend = _frontend;
        this.backend = _backend;
    }

    setAdmin(_frontend: boolean = false, _backend: boolean = false): void {
        this.frontend = _frontend;
        this.backend = _backend;
    }

    isFrontend(): boolean {
        return this.frontend;
    }

    isBackend(): boolean {
        return this.backend;
    }
}

class anotherLoginClass extends Permission {
    user: string;
    admin: boolean;
    alter: number;

    constructor(_user: string, _admin: boolean, _alter: number) {
        super(false, false);
        this.user = _user;
        this.admin = _admin;
        this.alter = _alter;

        if (this.admin) {
            this.setAdmin(true, true);
        }
        else {
            this.setAdmin(true, false)
        }
    }

    printPermissions(): void {
        console.log("Admin : " + this.admin);
        console.log("Frontend : " + this.isFrontend());
        console.log("Backend : " + this.isBackend());
    }
}

const user1 = new anotherLoginClass("pronix", false, 46);

user1.printPermissions();