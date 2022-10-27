import React from "react";
import FormHeader from "./FormHeader";
import FormInput from "./FormInput";

class NoteInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      limit: 50,
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    this.setState(() => {
      return {
        title: event.target.value.slice(0, this.state.limit),
      };
    });
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
        <FormInput
          onSubmit={this.onSubmitEventHandler}
          onTitleChange={this.onTitleChangeEventHandler}
          onBodyChange={this.onBodyChangeEventHandler}
          title={this.state.title}
          body={this.state.body}
          limit={this.state.limit - this.state.title.length}
        />
      </section>
    );
  }
}

export default NoteInput;
