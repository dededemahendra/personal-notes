import React from "react";
import { BiBookmark } from "react-icons/bi";

function ArchiveButton({ id, onArchive }) {
  return (
    <button className="btnArsip" onClick={() => onArchive(id)}>
      Arsipkan <BiBookmark />
    </button>
  );
}

export default ArchiveButton;
