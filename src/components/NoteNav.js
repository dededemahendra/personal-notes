import React from "react";
import NoteSearchItem from "./NoteSearchItem";

function NoteNav({ search, onSearchChange }) {
  return (
    <header className="note_header">
      <h1>Aplikasi Catatan Pribadi</h1>
      <NoteSearchItem search={search} onSearchChange={onSearchChange} />
    </header>
  );
}

export default NoteNav;
