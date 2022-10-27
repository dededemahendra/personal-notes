import React from "react";
import NoteHeader from "./NoteHeader";
import NoteInput from "./NoteInput";
import NoteList from "./NoteList";
import { getInitialData } from "../utils";

class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      search: "",
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onSearchChangeEventHandler = this.onSearchChangeEventHandler.bind(this);
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }

  onArchiveHandler(id) {
    const notes = this.state.notes.map((note) => {
      if (note.id === id) {
        return { ...note, archived: !note.archived };
      }

      return note;
    });

    this.setState({ notes });
  }

  onAddNoteHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            archived: false,
            createdAt: new Date().toISOString(),
          },
        ],
      };
    });
  }

  onSearchChangeEventHandler(event) {
    this.setState(() => {
      return {
        search: event.target.value,
      };
    });
  }

  render() {
    const archivedNotes = this.state.notes.filter((note) => {
      return note.title.toLowerCase().includes(this.state.search.toLowerCase()) && note.archived === true;
    });

    const unarchivedNotes = this.state.notes.filter((note) => {
      return note.title.toLowerCase().includes(this.state.search.toLowerCase()) && note.archived === false;
    });

    return (
      <div className="note_app">
        <NoteHeader />
        <div className="container">
          <NoteInput addNote={this.onAddNoteHandler} />
          <NoteList archivedNotes={archivedNotes} unarchivedNotes={unarchivedNotes} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} onSearchChange={this.onSearchChangeEventHandler} search={this.state.search} />
        </div>
      </div>
    );
  }
}

export default NoteApp;
