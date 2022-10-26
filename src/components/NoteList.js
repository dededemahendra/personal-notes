import React from "react";
import NoteItem from "./NoteItem";
import NoteStatusHeader from "./NoteStatusHeader";

function NoteList({ archivedNotes, unarchivedNotes, onDelete, onArchive }) {
  return (
    <section className="note_section">
      <div className="note_container">
        <div className="note_status">
          <NoteStatusHeader title="Catatan Aktif" />
          {unarchivedNotes.length
            ? unarchivedNotes.map((note) => {
                return <NoteItem key={note.id} id={note.id} onDelete={onDelete} onArchive={onArchive} />;
              })
            : "Tidak Ada Catatan"}
        </div>
        <div className="note_status">
          <NoteStatusHeader title="Catatan Arsip" />
          {archivedNotes.length
            ? archivedNotes.map((note) => {
                return <NoteItem title={note.title} id={note.id} onDelete={onDelete} onArchive={onArchive} {...note} />;
              })
            : "Tidak Ada Catatan"}
        </div>
      </div>
    </section>
  );
}

export default NoteList;
