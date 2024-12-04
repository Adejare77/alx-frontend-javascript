interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1 = {
    firstName: "John",
    lastName: "Doe",
    age: 23,
    location: "Lagos"
}

const student2 = {
    firstName: "George",
    lastName: "Martin",
    age: 33,
    location: "Port Harcourt"
}

const studentsList: Array<Student> = [student1, student2]

// Render table for the students
function renderTable(students: Student[]): void {
    const table = document.createElement('table')
    const thead = document.createElement('thead')

    const trh = document.createElement('tr')
    const th1 = document.createElement('th')
    th1.textContent = "firstName"
    trh.appendChild(th1)

    const th2 = document.createElement('th')
    th2.textContent = "location"
    trh.appendChild(th2)

    thead.appendChild(trh)

    const tbody = document.createElement('tbody')

    students.forEach(student => {
        const tr = document.createElement('tr')
        const td1 = document.createElement("td")
        td1.textContent = student.firstName
        tr.appendChild(td1)

        const td2 = document.createElement('td')
        td2.textContent = student.location
        tr.appendChild(td2)

        tbody.appendChild(tr)
    })

    table.appendChild(thead)
    table.appendChild(tbody)

    document.body.appendChild(table)

}


renderTable(studentsList)
