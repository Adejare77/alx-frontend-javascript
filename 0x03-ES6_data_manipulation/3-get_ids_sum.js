export default function getStudentIdsSum(getListStudents) {
  return getListStudents
    .map((student) => student.id)
    .reduce((prev, current) => prev + current, 0);
}
