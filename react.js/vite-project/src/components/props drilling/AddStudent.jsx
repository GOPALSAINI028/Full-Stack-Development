/*import { useState } from "react";

export default function AddStudent({ onAdd }) {
  const [name, setName] = useState("");

  const addStudent = () => {
    const newStudent = {
      id: Math.random(),
      name,
      age: 21,
      course: "Full Stack"
    };

    console.log("Task 4: AddStudent sending data → App");
    onAdd(newStudent);
  };

  return (
    <div>
      <input
        placeholder="Student name"
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={addStudent}>Add Student</button>
    </div>
  );
}
//Task 4
/*export default function AddStudent({ onAdd }) {
  const newStudent = {
    id: Math.random(),
    name: "New Student",
    age: 21
  };

  return (
    <button onClick={() => onAdd(newStudent)}>
      Add Student
    </button>
  );
}*/