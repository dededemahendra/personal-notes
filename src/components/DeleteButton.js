import React from "react";
import { AiOutlineDelete } from "react-icons/ai";

function DeleteButton({ id, onDelete }) {
  return (
    <button className="btnHapus" onClick={() => onDelete(id)}>
      Hapus <AiOutlineDelete />
    </button>
  );
}

export default DeleteButton;
