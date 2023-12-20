const students = [
  { id: 644518, name: "Anna Johns", program: "Compro" },
  { id: 641359, name: "Tom Jerry", program: "Compro" },
  { id: 620898, name: "Kerry Jerry", program: "MBA" },
];
class student {
  constructor(id, name, program) {
    this.id = id;
    this.name = name;
    this.program = program;
  }
  static getAll() {
    return students;
  }
  create() {
    student.push(this);
  }
  static findById(sid) {
    return students.filter((student) => student.id == sid);
  }
  static removeById(sid) {
    let deletedStudent={};
    let  index= students.findIndex(s=>s.id== sid);
    if(index>-1){
        deletedStudent =students[index];
        students.splice(index,1);
    }
    return deletedStudent;
  }
  static findByProgram(programId) {
    return students.filter((student) => student.program == programId);
  }
  updateStudent(sid){
let student= students.find(s=>s.id==sid);
let index= students.findIndex(student);
students.splice(index,1,this)
  }
}
module.exports = students;
