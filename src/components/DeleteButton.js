import React from "react";
import { AiOutlineDelete } from "react-icons/ai";

function DeleteButton({ id, onDelete }) {
  return (
    <button className="btn_hapus" onClick={() => onDelete(id)}>
      Hapus <AiOutlineDelete />
    </button>
  );
}

export default DeleteButton;
