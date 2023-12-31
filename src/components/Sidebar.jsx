import React, { useEffect, useState } from "react";
import "./Sidebar.css";

const Sidebar = ({ onAddNote, notes, currentNoteDelete ,activeNote,setActiveNote}) => {
  const addActive = (id) => {
    setActiveNote(id);
  };
  useEffect(() => {
    console.log("ActiveNoteが更新されました: ");
  }, [activeNote]);

  notes.sort((a, b) => b.modDate - a.modDate);

  return (
    <div className="app-sidebar">
      <div className="app-sidebar-header">
        <h1>ノート</h1>
        <button onClick={onAddNote}>追加</button>
      </div>
      <div className="app-sidebar-notes">
        {notes.map((note) => (
          <div className={`app-sidebar-note ${activeNote === note.id ? 'active' : ''}`} key={note.id} onClick={() => addActive(note.id)}>
            <div className="sidebar-note-title">
              <strong>{note.title}</strong>
              <button onClick={() => currentNoteDelete(note.id)}>削除</button>
            </div>
            <p>{note.content}</p>
            <small>最後の修正日：{new Date(note.modDate).toLocaleDateString("ja-JP",{
              hour:"2-digit",
              minute:"2-digit",
            })}</small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
