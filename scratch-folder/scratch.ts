interface Permission {
    frontend: boolean;
    backend: boolean;
}

interface Login extends Permission {
    user: string;
    admin: boolean;
    age: number;
    frontend: boolean;
    backend: boolean;
}

let login2: Login = {
    user: 'me',
    admin: true,
    age: 2,
    frontend: true, 
    backend: true
}


function printExtendedLogin(): void {
    console.log(login2.user);
    console.log(login2.admin);
    console.log(login2.age);
    console.log(login2.frontend);
    console.log(login2.backend);
}

printExtendedLogin();