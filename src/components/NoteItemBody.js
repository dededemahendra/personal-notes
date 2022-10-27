import React from "react";

function NoteItemBody({ title, body }) {
  return (
    <div className="note_content">
      <h1>{title}</h1>
      <p>{body}</p>
    </div>
  );
}

export default NoteItemBody;
