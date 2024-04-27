type UserType = {
    name: string;
    email: string;
    phone: string;
    password: string;
}

class User {
    name: string;
    email: string;
    phone: string;
    password: string;

    constructor(user: UserType) {
        this.name = user.name;
        this.email = user.email;
        this.phone = user.phone;
        this.password = user.password;
    }

    authenticate(password: string) {
        if (this.password === password) {
            console.log('User is logged in');
        } else {
            console.log('Incorrect password');
        }
    }
}

class Teacher extends User {
    constructor(user: UserType) {
        super(user);
    }

    fileTheGrades(student: Student, grade: number) {
        student.grades.push(grade);
    }
}

class Student extends User {
    grades: number[];

    constructor(user: UserType) {
        super(user);
        this.grades = [];
    }

    getAverage() {
        const sum = this.grades.reduce((acc, grade) => acc + grade, 0);
        const average = sum / this.grades.length;
        return `${this.name} Average: ${average}`;
    }
}

const john = new Student({
    name: 'John Doe',
    email: 'john@email.com',
    phone: '123456789',
    password: '123456'
});

const jane = new Teacher({
    name: 'Jane Smith',
    email: 'jane@email.com',
    phone: '987654321',
    password: '654321'
});

john.authenticate('123456');
jane.authenticate('654321');
jane.fileTheGrades(john, 10);
jane.fileTheGrades(john, 9);
console.log(john.getAverage());