import React from "react";

function DeleteButton({ id, onDelete }) {
  return (
    <button className="btn_delete" onClick={() => onDelete(id)}>
      Hapus
    </button>
  );
}

export default DeleteButton;
