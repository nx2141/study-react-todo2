import React from "react";
import "./MainContents.css";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import remarkGfm from 'remark-gfm';

const MainContents = ({ activeNote, onUpdateNote }) => {
  const onEditNote = (key, value) => {
    onUpdateNote({
      ...activeNote,
      [key]: value,
      modDate: Date.now(),
    });
  };

  if (!activeNote) {
    return <div className="no-active-note">ノートが選択されていません</div>;
  }
  return (
    <div className="app-main">
      <div className="app-main-note-edit">
        <input
          id="title"
          type="text"
          placeholder="ノート内容を記入"
          value={activeNote.title}
          onChange = {(e) => onEditNote("title",e.target.value)}
        ></input>
        <textarea
          id="content"
          placeholder="ノート内容を記入"
          value={activeNote.content}
          onChange = {(e) => onEditNote("content",e.target.value)}
        ></textarea>
      </div>
      <div className="app-main-note-preview">
        <h1 className="preview-title">{activeNote.title}</h1>
        <ReactMarkdown remarkPlugins={[remarkGfm]} className="markdown-preview">{activeNote.content}</ReactMarkdown>
      </div>
    </div>
  );
};

export default MainContents;
