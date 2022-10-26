import React from "react";

function NoteSearchItem({ search, onSearchChange }) {
  return (
    <div className="note_search">
      <input type="text" className="search" placeholder="Cari Catatan..." onChange={onSearchChange} defaultValue={search} />
    </div>
  );
}

export default NoteSearchItem;
