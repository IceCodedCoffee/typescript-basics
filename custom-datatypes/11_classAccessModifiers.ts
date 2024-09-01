class NewPermission {
    private frontend: boolean = false;
    private backend: boolean = false;

    constructor(_frontend: boolean, _backend: boolean) {
        this.frontend = _frontend;
        this.backend = _backend;
    }

    protected setAdmin(_frontend: boolean = false, _backend: boolean = false): void {
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

class Login2 extends NewPermission {
    private user: string;
    private admin: boolean;
    private alter: number;

    constructor(_user: string, _admin: boolean, _alter: number) {
        super(false, false);
        this.user = _user;
        this.admin = _admin;
        this.alter = _alter;

        if (this.admin) {
            this.setAdmin(true, true);
        }
        else {
            this.setAdmin(true, false);
        }
    }

}
const user2 = new Login2("pronix", false, 46);
// user2.admin = true; // -> private
// user2.setAdmin(true, true); // -> protected