import React from "react";
import FormHeader from "./FormHeader";
import SearchNote from "./SearchNote";
import NoteItem from "./NoteItem";
import NoteStatusHeader from "./NoteStatusHeader";

function NoteList({
  archivedNotes,
  unarchivedNotes,
  onDelete,
  onArchive,
  onSearchChange,
  search,
}) {
  return (
    <section className="section_note">
      <FormHeader title="Daftar Catatan" />
      <SearchNote onSearchChange={onSearchChange} search={search} />
      <div className="note_status">
        <NoteStatusHeader title="Catatan Aktif" />
        {unarchivedNotes.length
          ? unarchivedNotes.map((note) => {
              return (
                <NoteItem
                  key={note.id}
                  id={note.id}
                  onDelete={onDelete}
                  onArchive={onArchive}
                  {...note}
                />
              );
            })
          : "Tidak ada catatan"}
      </div>
      <div className="note_status">
        <NoteStatusHeader title="Arsip" />
        {archivedNotes.length
          ? archivedNotes.map((note) => {
              return (
                <NoteItem
                  key={note.id}
                  id={note.id}
                  onDelete={onDelete}
                  onArchive={onArchive}
                  {...note}
                />
              );
            })
          : "Tidak ada catatan"}
      </div>
    </section>
  );
}

export default NoteList;
