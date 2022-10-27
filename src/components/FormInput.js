import React from "react";

function FormInput({
  onSubmit,
  onTitleChange,
  onBodyChange,
  title,
  body,
  limit,
}) {
  return (
    <form onSubmit={onSubmit} className="form_input">
      <div className="input">
        <label htmlFor="note_title">Judul</label>
        <input
          type="text"
          className="note_title"
          value={title}
          onChange={onTitleChange}
          required
        />
        <span>Sisa karakter: {limit}</span>
      </div>
      <div className="input">
        <label htmlFor="note_value">Isi Catatan</label>
        <textarea
          name="note_value"
          className="note_value"
          cols="30"
          rows="10"
          value={body}
          onChange={onBodyChange}
          required
        ></textarea>
      </div>
      <button type="submit" className="btnSubmit">
        Buat Catatan
      </button>
    </form>
  );
}

export default FormInput;
