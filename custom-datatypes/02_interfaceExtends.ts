//extending an interface
interface Permission {
    frontend: boolean;
    backend: boolean;
}

interface ExtendedLogin extends Permission {
    user: string;
    admin: boolean; 
    age: number;
    frontend: boolean;
    backend: boolean;
}