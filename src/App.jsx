import { useEffect, useState } from "react";
import "./App.css";
import MainContents from "./components/MainContents";
import Sidebar from "./components/Sidebar";
import { v4 as uuidv4 } from "uuid";


function App() {
  const [notes, setNotes] = useState([]);

  const onAddNote = () => {
    console.log("新しくノートが追加されました");
    const newNote = {
      id:uuidv4(),
      title: "新しいノート",
      content:"新しいノートの内容",
      modDate:Date.now(),
    };
    setNotes(prevNotes => [...prevNotes, newNote]);
  };

const currentNoteDelete = (currentData) => {
  const NewNotes = notes.filter(note => note.id !== currentData);
  setNotes(NewNotes);
};

  return (
    <div className="App">
      <Sidebar onAddNote={onAddNote} notes={notes} currentNoteDelete={currentNoteDelete} />
      <MainContents />
    </div>
  );
}

export default App;
