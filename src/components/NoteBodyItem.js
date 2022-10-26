import React from "react";

function NoteBodyItem({ title, body }) {
  return (
    <div className="notes_content">
      <h1>{title}</h1>
      <p>{body}</p>
    </div>
  );
}

export default NoteBodyItem;
