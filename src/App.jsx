import { useState } from "react";
import "./App.css";
import MainContents from "./components/MainContents";
import { v4 as uuidv4 } from "uuid";
import Sidebar from "./components/Sidebar";

// uuidv4()

function App() {
  const [notes, setNotes] = useState([]);

  const onAddNote = () => {
    console.log("新しくノートが追加されました");
    const newNote = {
      id:1,
      title: "新しいノート",
      content:"新しいノートの内容",
      modDate:Date.now(),
    };
    setNotes([...notes, newNote]);
    console.log(notes);
  };

  return (
    <div className="App">
      <Sidebar onAddNote={onAddNote} />
      <MainContents />
    </div>
  );
}

export default App;
