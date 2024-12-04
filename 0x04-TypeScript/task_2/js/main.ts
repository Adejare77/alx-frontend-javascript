
interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}


interface TeacherInterface extends Omit<DirectorInterface, "workDirectorTasks">{
    workTeacherTasks(): string;  // add work
}


class Director implements DirectorInterface {
    workFromHome(): string {
        return "Working from home"
    }

    getCoffeeBreak(): string {
        return "Getting a coffee break"
    }

    workDirectorTasks(): string {
        return "Getting to director tasks"
    }
}

class Teacher implements TeacherInterface {
    workFromHome(): string {
        return "Cannot work from home"
    }

    getCoffeeBreak(): string {
        return "Cannot have a break"
    }

    workTeacherTasks(): string {
        return "Getting to work"
    }
}

function createEmployee(salary: number | string): TeacherInterface | DirectorInterface {
    if (typeof salary === "number" && salary < 500) {
        return new Teacher()
    }
    return new Director()
}

function isDirector(employee: DirectorInterface | TeacherInterface): employee is DirectorInterface {
    return (employee as Director).workDirectorTasks !== undefined;
}


function executeWork(employee: DirectorInterface | TeacherInterface): void {
    if (isDirector(employee)) {
        console.log(employee.workDirectorTasks())
    } else {
        console.log(employee.workTeacherTasks())
    }

}

type Subjects = "Math" | "History"

function teachClass(todayClass: Subjects): string {
    return `Teaching ${todayClass}`
}

// executeWork(createEmployee(200))
// executeWork(createEmployee(1000))


console.log(teachClass('Math'))
console.log(teachClass('History'))
