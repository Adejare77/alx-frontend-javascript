import getStudentsByLocation from "./2-get_students_by_loc";
import getStudents from "./0-get_list_students"
import getListStudents from "./0-get_list_students";

const students = getListStudents();

console.log(getStudentsByLocation(students, 'San Francisco'))
