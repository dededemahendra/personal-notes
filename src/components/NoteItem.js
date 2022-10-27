import React from "react";
import ArchiveButton from "./ArchiveButton";
import DeleteButton from "./DeleteButton";
import NoteItemBody from "./NoteItemBody";

function NoteItem({ id, title, body, onDelete, onArchive }) {
  return (
    <div className="note_card">
      <NoteItemBody title={title} body={body} />
      <div className="action">
        <ArchiveButton id={id} onArchive={onArchive} />
        <DeleteButton id={id} onDelete={onDelete} />
      </div>
    </div>
  );
}

export default NoteItem;
