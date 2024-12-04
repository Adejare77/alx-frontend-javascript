interface Teacher {
    readonly firstName: string; // only modified during first initialization
    readonly lastName: string;  // only modified during first initialization
    fullTimeEmployee: boolean;  // always defined
    yearsOfExperience?: number;  // optional
    location: string; // always defined
    [otherAttribute: string]: any; // any other attribute
}

interface Directors extends Teacher {
    numberOfReports: number;
}

function printTeacher(firstName: string, lastName: string) {
    return firstName.slice(0, 1) + ". " + lastName
}

interface Students {
    workOnHomework(): string;
    displayName(): string;
}

interface StudentConstructor {
    new (firstName: string, lastName: string): Students;
}

class StudentClass implements Students{
    constructor(public firstName: string, public lastName: string) {}

    workOnHomework(): string {
        return "Currently working"
    }

    displayName(): string {
        return this.firstName
    }
}
