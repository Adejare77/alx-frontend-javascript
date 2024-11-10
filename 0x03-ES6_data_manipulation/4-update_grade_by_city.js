export default function updateStudentGradeByCity(getListStudents, city, newGrades) {
  return getListStudents
  .filter((CityLocation) => CityLocation.location === city)
  .map((student) => {
    const score = newGrades.filter((updateGrade) => updateGrade.studentId === student.id)[0]
    return {...student, grade: score ? score.grade : 'N/A'}
  })
}
