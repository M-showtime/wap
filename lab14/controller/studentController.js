const Student = require("../model/student");

let controller = {
    getStudents: function (req, res, next) {
        res.status(200).json(Student.getAll());
    },
    getStudentById: function (req, res, next) {
        let id = req.params.id;
        let student = Student.getById(id);
        if (student) {
            res.status(200).json(student);
        }
        else {
            res.status(404).json({ message: "student not found." });
        }
    },
    createStudent: function (req, res, next) {
        let { id, name, program } = req.body;
        if (id && name && program) {
            let newStudent = new Student(id, name, program);
            newStudent.create();
            res.status(201).json(newStudent);
        } else {
            res.status(400).json({ message: "provide all data." });
        }
    },
    deleteStudent: function (req, res, next) {
        let id = parseInt(req.params.id);
        let deletedStudent = Student.removebyId(id);
        if (!deletedStudent) {
            res.status(404).json({ message: "student not found" });
        }
        else {
            res.status(200).json(deletedStudent);
        }
    },
    updateStudent: function (req, res, next) { 
        let oldId=req.params.oldId;
        let {id, name, program } = req.body;
        if (id && name && program) {
            let newStudent = new Student(id, name, program);
            newStudent.update(oldId);
            res.status(200).json(newStudent);
        } else {
            res.status(400).json({ message: "provide all data." });
        }
    },
    filterByProgram: function (req, res, next) {
        let program = req.query.program;
        let filteredStudents = Student.filterByProgram(program);
        if (filteredStudents.length > 0) {
            res.status(200).json(filteredStudents);
        } else {
            res.status(404).json({ message: "Student not found." });
        }
    }
};

module.exports = controller;