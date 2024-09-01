//interface 
interface LoginInterface {
    user: string;
    admin: boolean; 
    age: number;
}

const login: LoginInterface = {
    user: 'me',
    admin: true,
    age: 2
}

function printLoginCredentials(login: LoginInterface) {
    console.log(login.user);
    console.log(login.admin);
    console.log(login.age);
}

printLoginCredentials(login);