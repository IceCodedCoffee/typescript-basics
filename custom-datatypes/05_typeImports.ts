import {NewLogin} from './04_typeVisibility';

const login: NewLogin = {
    user: 'me',
    admin: true,
    age: 5,
}

console.log(login.user);
console.log(login.admin);
console.log(login.age);