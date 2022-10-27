import React from "react";

function SearchNote({ onSearchChange, search }) {
  return (
    <div className="search_note">
      <input
        type="text"
        className="search"
        placeholder="Cari catatan anda..."
        onChange={onSearchChange}
        value={search}
      />
    </div>
  );
}

export default SearchNote;
