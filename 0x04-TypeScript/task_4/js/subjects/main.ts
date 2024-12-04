const Cpp = require('./Cpp')
const Java = require('./Java')
const React = require('./React')


const cpp = new Cpp();
const java = new Java()
const react = new React();


const cTeacher:  Subjects.Teacher = {
    firstName: "Rashisky",
    lastName: "Paper",
    experienceTeachingC: 10
}

cpp.SetTeacher = cTeacher;
java.SetTeacher = cTeacher;
react.SetTeacher = cTeacher;
