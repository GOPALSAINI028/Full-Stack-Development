/*import StudentDetails from "./StudentsDetails.jsx";

export default function StudentItem({ student, onStudentClick, onRating }) {
  const handleClick = () => {
    console.log("Task 3: StudentItem sending data → App");
    onStudentClick(student.name);
  };

  return (
    <div style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
      <h3>{student.name} (Age: {student.age})</h3>
      <button onClick={handleClick}>Send Student Name to App</button>

     
      {/* Task 2 & 6 }
      <StudentDetails student={student} onRating={onRating} />
    </div>
  );
}*/


//Task 1
/*export default function StudentItem({ name, age }) {
  return (
    <div>
      <h3>Name: {name}</h3>
      <p>Age: {age}</p>
    </div>
  );
}

//Task 2
/*import StudentDetails from "./StudentDetails";

export default function StudentItem({ student }) {
  return (
    <div>
      <StudentDetails student={student} />
    </div>
  );
}*/

//Task 3
/*export default function StudentItem({ student, onStudentClick }) {
  return (
    <div>
      <h3>{student.name}</h3>
      <button onClick={() => onStudentClick(student.name)}>
        Click Student
      </button>
    </div>
  );
}*/

//Task 6
/*import StudentDetails from "./StudentDetails";

export default function StudentItem({ student, onRating }) {
  return (
    <StudentDetails student={student} onRating={onRating} />
  );
}*/
