/*import StudentItem from "./StudentItem.jsx";

export default function StudentList({ students, onStudentClick, onRating }) {
  return (
    <div>
      <h2>Student List</h2>

      {students.map((student) => (
        <StudentItem
          key={student.id}
          student={student}
          onStudentClick={onStudentClick}
          onRating={onRating}
        />
      ))}
    </div>
  );
}*/
//Task 2
/*import StudentItem from"./components "./StudentItem";

export default function StudentList({ student }) {
  return (
    <div>
      <StudentItem student={student} />
    </div>
  );
}*/
//Task 3
  /*import StudentItem from "./StudentItem";

  export default function StudentList({ onStudentClick }) {
  const student = { name: "Aarav" };

  return (
    <div>
      <StudentItem student={student} onStudentClick={onStudentClick} />
    </div>
  );
}*/

//Task 4
/*export default function StudentList({ students }) {
  return (
    <ul>
      {students.map((s) => (
        <li key={s.id}>
          {s.name} - {s.age}
        </li>
      ))}
    </ul>
  );
}*/

//Task 6
/*import StudentItem from "./StudentItem";

export default function StudentList({ onRating }) {
  const student = { name: "Aarav", age: 20, course: "React" };

  return (
    <StudentItem student={student} onRating={onRating} />
  );
}*/