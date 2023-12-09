function Student(lastName, firstName, grades) {
    this.lastName = lastName;
    this.firstName = firstName;
    this.grades = grades;

    }
  
  Student.prototype.inputNewGrade = function (newGrade) {
      this.grades.push(newGrade);
  };
  Student.prototype.computeAverageGrade = function () {
      return this.grades.reduce((result, element) => (result + element), 0) / this.grades.length;
  };
  
  let student1 = new Student("Elias", "Hanna", []);
  let student2 = new Student("Moss", "Selam", []);
  let student3 = new Student("Tom", "Eldana", []);
  
  student1.inputNewGrade(88);
  student1.inputNewGrade(96);
  student1.inputNewGrade(95);
  
  student2.inputNewGrade(88);
  student2.inputNewGrade(79);
  student2.inputNewGrade(85);
  
  student3.inputNewGrade(91);
  student3.inputNewGrade(94);
  student3.inputNewGrade(89);
  
  st1Avg = student1.computeAverageGrade();
  st2Avg = student2.computeAverageGrade();
  st3Avg = student3.computeAverageGrade();
  
  console.log("Grade Average of Student 1: ",st1Avg);
  console.log("Grade Average of Student 2: ",st2Avg);
  console.log("Grade Average of Student 3: ",st3Avg);
  
  let students = [st1Avg, st2Avg, st3Avg];
  // printing the Average of all the students
  console.log("Grade Average of all the students: ", students.reduce((result, element) => (result + element), 0) / students.length);
  
  Array.prototype.sort(()=>{
    (a,b)=>{return a-b};
    })
  
// sorting students by their firstName
  const studentsByNames = [student1.firstName, student2.firstName, student3.firstName];
  console.log(studentsByNames.sort());

  // sorting students by their average grade
  const studentsByAverage = [st1Avg, st2Avg, st3Avg];
  console.log(studentsByAverage.sort());

    
   