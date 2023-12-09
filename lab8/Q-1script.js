let student = {
    lastName: "",
    firstName: "",
    grades: [],
    inputNewGrade: function (newGrade) {
      this.grades.push(newGrade);
    },
    computeAverageGrade: function () {
      return this.grades.reduce((result, element) => (result + element), 0) /this.grades.length;
    },
  };
  
  let student1 = Object.create(student);
  let student2 = Object.create(student);
  let student3 = Object.create(student);
  
  student1.lastName = "Sami";
  student1.firstName = "henok";
  student1.grades=[];
  student1.inputNewGrade(88);
  student1.inputNewGrade(96);
  student1.inputNewGrade(95);
  
  student2.lastName = "dawit";
  student2.firstName = "yonas";
  student2.grades=[];
  student2.inputNewGrade(88);
  student2.inputNewGrade(79);
  student2.inputNewGrade(85);
  
  
  student3.lastName = "Tomas";
  student3.firstName = "edwardo";
  student3.grades=[];
  student3.inputNewGrade(91);
  student3.inputNewGrade(94);
  student3.inputNewGrade(89);
  
  st1Avg = student1.computeAverageGrade()
  st2Avg = student2.computeAverageGrade()
  st3Avg = student3.computeAverageGrade()
  
  console.log(st1Avg);
  console.log(st2Avg);
  console.log(st3Avg);
  
  let students = [st1Avg, st2Avg, st3Avg];
  // printing the Average of all the students
  console.log(students.reduce((result, element) => (result + element), 0) /students.length);