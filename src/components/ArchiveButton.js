import React from "react";

function ArchiveButton({ id, onArchive }) {
  return (
    <button className="btn_archive" onClick={() => onArchive(id)}>
      Arsipkan
    </button>
  );
}

export default ArchiveButton;
