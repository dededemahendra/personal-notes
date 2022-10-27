import React from "react";
import FormHeader from "./FormHeader";
import FormInput from "./FormInput";

class NoteInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      limit: 100,
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    if (this.state.limit > 0) {
      this.setState((prevState) => {
        return {
          title: event.target.value,
          limit: prevState.limit - 1,
        };
      });
    } else {
      alert("Tidak boleh lebih dari 100 karakter");
    }
  }

  onBodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
    this.setState(() => {
      return {
        title: "",
        body: "",
        limit: 50,
      };
    });
  }

  render() {
    return (
      <section className="section_input">
        <FormHeader title="Input Catatan" />
        <FormInput onSubmit={this.onSubmitEventHandler} onTitleChange={this.onTitleChangeEventHandler} onBodyChange={this.onBodyChangeEventHandler} title={this.state.title} body={this.state.body} limit={this.state.limit} />
      </section>
    );
  }
}

export default NoteInput;
