import { useEffect, useState } from "react";
import "./App.css";
import MainContents from "./components/MainContents";
import Sidebar from "./components/Sidebar";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem("notes")) || []);
  const [activeNote, setActiveNote] = useState(false);

  useEffect(() => {
    //ローカルストレージにノートを保存する
    localStorage.setItem("notes",JSON.stringify(notes));
  }, [notes]);
  useEffect(() => {
    setActiveNote(notes[0].id);
  }, []);

  const onAddNote = () => {
    console.log("新しくノートが追加されました");
    const newNote = {
      id: uuidv4(),
      title: "新しいノート",
      content: "",
      modDate: Date.now(),
    };
    setNotes((prevNotes) => [...prevNotes, newNote]);
  };

  const currentNoteDelete = (currentData) => {
    const NewNotes = notes.filter((note) => note.id !== currentData);
    setNotes(NewNotes);
  };

  const getActiveNode = () => {
    return notes.find((note) => note.id === activeNote)
  }

  const onUpdateNote = (updatedNote) => {
    //修正された新しいノートの配列を返す。
    const updatedNotesArray = notes.map((note) => {
      if(note.id === updatedNote.id){
        return updatedNote;
      }else{
        return note;
      }
    });
    setNotes(updatedNotesArray);
  };

  return (
    <div className="App">
      <Sidebar
        onAddNote={onAddNote}
        notes={notes}
        currentNoteDelete={currentNoteDelete}
        activeNote={activeNote}
        setActiveNote={setActiveNote}
      />
      <MainContents activeNote={getActiveNode()} onUpdateNote={onUpdateNote} />
    </div>
  );
}

export default App;
