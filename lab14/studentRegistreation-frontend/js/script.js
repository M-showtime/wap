///window.onload = display;
window.onload = () => {
  display();
  populateDropdown("ddlStudent");
  populateDropdown("ddlStudentForUpdate");
};

async function display() {
  let response = await fetch("http://localhost:3012/students");
  let json;
  if (response.ok) {
    json = await response.json();
    console.log(json);
    for (let e of json) {
      addRowToTable(e.id, e.name, e.program);
    }
  } else alert("Error" + response.status);
}

function addRowToTable(id, name, program) {
  let row = document.createElement("tr");
  row.setAttribute("id", id);
  for (let e of arguments) {
    let cell = document.createElement("td");
    cell.appendChild(document.createTextNode(e));
    row.appendChild(cell);
  }
  document.getElementById("tbodyStudentList").appendChild(row);
}

async function addStudent(id, name, program) {
  let obj = { id, name, program };
  let setting = {
    method: "POST",
    body: JSON.stringify(obj),
    headers: { "Content-Type": "application/json" },
  };
  let response = await fetch("http://localhost:3012/students", setting);
  if (response.ok) {
    addRowToTable(id, name, program);
  } else alert("Error " + response.status);
}

// Populate the dropdown with student IDs for delete and update  when the page loads
async function populateDropdown(selectId) {
    let response = await fetch("http://localhost:3012/students");
    let json;
    if (response.ok) {
      json = await response.json();
      const ddlStudent = document.getElementById(selectId);
      
      // Clear the existing options by removing all children
      while (ddlStudent.firstChild) {
        ddlStudent.removeChild(ddlStudent.firstChild);
      }
  
      // Add a default option
      const defaultOption = document.createElement('option');
      defaultOption.value = "";
      defaultOption.text = "Select student id";
      ddlStudent.appendChild(defaultOption);
  
      // Populate the dropdown with the student IDs
      for (let student of json) {
        let option = document.createElement('option');
        option.value = student.id;
        option.text = student.id;
        ddlStudent.appendChild(option);
      }
    } else {
      alert("Error " + response.status);
    }
  }

  async function deleteStudent(id) {
  
  
    if (!id) {
      alert("Please select a student to delete.");
      return;
    }
  
    const deleteRequest = {
      method: "DELETE",
    };
  
    const response = await fetch(`http://localhost:3012/students/${id}`, deleteRequest);
  
    if (response.ok) {
      // Remove the row from the table
      const row = document.getElementById(id);
      if (row) {
        row.remove();
      } else {
        alert("Error: Student row not found.");
      }

    } else {
      alert("Error " + response.status);
    }
    
    // Clear the form and update the dropdown
    document.getElementById("myform").reset();
    populateDropdown("ddlStudent");
    populateDropdown("ddlStudentForUpdate");
  }
  async function updateStudent(oldId,newId,name,program) {

    // Create an object with the updated data
    const updatedStudent = {
      id: newId,
      name: name,
      program: program,
    };
  
    // Make a PUT request to update the student
    const updateRequest = {
      method: "PUT",
      body: JSON.stringify(updatedStudent),
      headers: { "Content-Type": "application/json" },
    };
  
    const response = await fetch(`http://localhost:3012/students/${oldId}`, updateRequest);
  
    if (response.ok) {
      const row = document.getElementById(oldId);
      // Update the cells with the new data
      const cells = row.getElementsByTagName("td");
      cells[0].textContent = newId;
      cells[1].textContent = name;
      cells[2].textContent = program;

    } else {
      alert("Error " + response.status);
    }

          // Refresh the dropdowns after the update
          document.getElementById("myform").reset();
          populateDropdown("ddlStudent");
          populateDropdown("ddlStudentForUpdate");
  }

document.getElementById("btnRegister").addEventListener("click", () => {
    let id = document.getElementById("id").value;
    let name = document.getElementById("name").value;
    let program = document.getElementById("program").value;
    addStudent(id, name, program);
    document.getElementById("myform").reset();
  });

document.getElementById("btnDelete").addEventListener("click", () => {
    const selectedId = document.getElementById("ddlStudent").value;
    deleteStudent(selectedId);
  });

document.getElementById("btnUpdate").addEventListener("click", () => {
     // Get the selected student ID from the dropdown
     const selectedStudentId = document.getElementById("ddlStudentForUpdate").value;
  
     // Get the updated student data from the form
     const updatedId = document.getElementById("idForUpdate").value;
     const updatedName = document.getElementById("nameForUpdate").value;
     const updatedProgram = document.getElementById("programForUpdate").value;
    updateStudent(selectedStudentId,updatedId,updatedName,updatedProgram);
  });