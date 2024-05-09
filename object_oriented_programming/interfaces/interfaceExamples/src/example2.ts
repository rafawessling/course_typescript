interface IUser {
    name: string;
    email: string;
    password: string;
}

abstract class User {
    name: string;
    email: string;
    protected password: string;

    constructor (user: IUser) {
        this.name = user.name;
        this.email = user.email;
        this.password = user.password;
    }

    abstract login(password: string): boolean;
}

class Manager extends User {
    constructor (user: IUser) {
        super(user);
        this.name = user.name;
        this.email = user.email;
    }

    login(password: string): boolean {
        if (this.password !== this.password) {
            return true;
        }
        return false;
    }
}