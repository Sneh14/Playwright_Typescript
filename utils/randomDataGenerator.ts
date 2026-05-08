import {faker} from '@faker-js/faker';

export class RandomDataUtil{

    static getFirstName(){
       return faker.person.firstName();
    }

    static getLastName(){
       return faker.person.lastName();
    }

     static getFullName(){
       return faker.person.fullName();
    }

     static getEmail(){
       return faker.internet.email();
    }
    static getPassword(){
       return faker.internet.password();
    }
    static getPhone(){
       return faker.phone.number();
    }
}