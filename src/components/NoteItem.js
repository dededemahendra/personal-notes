import React from "react";
import ArchiveButton from "./ArchiveButton";
import DeleteButton from "./DeleteButton";
import NoteBodyItem from "./NoteBodyItem";

function NoteItem({ id, title, body, onArchive, onDelete }) {
  return (
    <div className="notes_card">
      <NoteBodyItem title={title} body={body} />
      <div className="notes_action">
        <ArchiveButton id={id} onArchive={onArchive} />
        <DeleteButton id={id} onDelete={onDelete} />
      </div>
    </div>
  );
}

export default NoteItem;
