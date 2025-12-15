/*import { useState } from "react";
import LifecycleDemo from "./lifecycleDemo.jsx";


export default function App() {
  const [show, setShow] = useState(true);

  console.log("App Rendered");

  return (
    <div>
      <h1>React Lifecycle Demo</h1>

      <button onClick={() => setShow(!show)}>
        {show ? "Hide Component" : "Show Component"}
      </button>

      {show && <LifecycleDemo />}
    </div>
  );
}*/

/*import { useState } from "react";
import StudentList from "./components/StudentList.jsx";
import AddStudent from "./components/AddStudent.jsx";
import DisplayMessage from "./components/Display.jsx";

export default function App() {
  const [students, setStudents] = useState([
    { id: 1, name: "Aarav", age: 20, course: "React" },
    { id: 2, name: "Riya", age: 22, course: "Node" }
  ]);


  const [rating, setRating] = useState(null);

  // Task 3 — Receiving Data From StudentItem
  const handleStudentClick = (studentName) => {
    console.log("Task 3: Student clicked in StudentItem:", studentName);
  };

  // Task 4 — AddStudent → App → StudentList
  const handleAddStudent = (newStudent) => {
    console.log("Task 4: New student received in App:", newStudent);
    setStudents([...students, newStudent]);
  };

  // Task — Grandchild → Parent
  const handleRating = (value) => {
    console.log("Task 6: Rating received in App:", value);
    setRating(value);
  };

  // Component to pass as prop (Task 5)
  const MyCustomComponent = <p>This message is passed as a COMPONENT!</p>;

  return (
    <div>
      <h1>Props Drilling Assignment</h1>

      {/* Task 1 & 2 & 3 & 6 }
      <StudentList
        students={students}
        onStudentClick={handleStudentClick}
        onRating={handleRating}
      />

      {/* Task 4 }
      <AddStudent onAdd={handleAddStudent} />

      {/* Task 5 }
      <DisplayMessage message={MyCustomComponent} />

      {rating && <p>Latest rating received: {rating}</p>}
    </div>
  );
}*/

//Task 1 (parent to child)//
 /* import StudentItem from "./components/StudentItem.jsx";

export default function App() {
  const name = "Aarav";
  const age = 20;

  return (
    <div>
      <h1>Task 1 - Basic Props</h1>
      <StudentItem name={name} age={age} />
    </div>
  );
}*/

//Task 2(Parent to child to grandchild)//
/*import StudentList from "./StudentList";

export default function App() {
  const student = {
    id: 1,
    name: "Aarav",
    age: 20,
    course: "React"
  };

  return (
    <div>
      <h1>Task 2 - Props Drilling</h1>
      <StudentList student={student} />
    </div>
  );
}*/

//Task 3
/*import StudentList from ".components/StudentList";

 export default function App() {
  const handleStudentClick = (name) => {
    console.log("Task 3: Click received from child:", name);
  };

  return (
    <div>
      <h1>Task 3 - Child to Parent</h1>
      <StudentList onStudentClick={handleStudentClick} />
    </div>
  );
}*/

//Task 4
/*import { useState } from "react";
import StudentList from "./StudentList";
import AddStudent from "./AddStudent";

export default function App() {
  const [students, setStudents] = useState([
    { id: 1, name: "Aarav", age: 20 },
    { id: 2, name: "Riya", age: 22 }
  ]);

  const handleAddStudent = (newStu) => {
    console.log("Task 4: New student received:", newStu);
    setStudents([...students, newStu]);
  };

  return (
    <div>
      <h1>Task 4 - Sibling to Sibling</h1>
      <AddStudent onAdd={handleAddStudent} />
      <StudentList students={students} />
    </div>
  );
}*/

//Task 5
/*import DisplayMessage from "./DisplayMessage";

export default function App() {
  const MyComponent = <p>This is a component passed as a prop!</p>;

  return (
    <div>
      <h1>Task 5 - Component Prop</h1>
      <DisplayMessage message={MyComponent} />
    </div>
  );
}*/

//Task 6
/*import { useState } from "react";
import StudentList from "./StudentList";

export default function App() {
  const [rating, setRating] = useState(null);

  const handleRating = (value) => {
    console.log("Task 6: Received rating:", value);
    setRating(value);
  };

  return (
    <div>
      <h1>Task 6 - Grandchild to Parent</h1>
      <StudentList onRating={handleRating} />

      {rating && <p>Latest Rating: {rating}</p>}
    </div>
  );
}*/
import { useState, useEffect } from "react";
import TextInput from "./components/TextInput.jsx";
import CounterPanel from "./components/CounterPanel.jsx";
import AnalysisPanel from "./components/AnalysisPanel.jsx";
import Preview from "./components/Preview.jsx";
import Warning from "./components/Warning.jsx";
import AnalyzeText from "./components/AnalyzeText.jsx";
import "./App.css";

export default function App() {
  const [text, setText] = useState("");
  const { analyzeText } = AnalyzeText();
  const [data, setData] = useState({});

  useEffect(() => {
    setData(analyzeText(text));
  }, [text]);

  return (
    <div className="app">
      <h1>Real-Time Text Analyzer</h1>

      <TextInput onTextChange={setText} />

      <Warning
        message={
          data.isLimitReached
            ? "Character limit exceeded!"
            : data.is80Reached
            ? "80% of limit reached!"
            : ""
        }
      />

      <CounterPanel data={data} />
      <AnalysisPanel data={data} />
      <Preview text={text} />
    </div>
  );
}
