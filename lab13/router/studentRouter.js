const express = require("express");
const studentController= require("../controller/studentController");
const router = express.Router();

router.get('/',studentController.getAllStudents);
router.get('/:id',studentController.getById);
router.post('/',studentController.createStudent);
router.delete('/:id',studentController.deleteByID);
router.put('/:id',studentController.updateStudent);
router.get('/search',studentController.filterByProgra);

module.exports =router;