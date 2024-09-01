interface PermissionInterface {
    frontend: boolean;
    backend: boolean;
}

class Login implements PermissionInterface {
    user: string;
    admin: boolean;
    alter: number;
    frontend: boolean;
    backend: boolean;
}