import React from "react";
import Form from "./formInput";

class Input extends React.Component {
  state = {
    todo: "",
    data: []
  };

  handleChange = event => {
    this.setState({
      todo: event.target.value
    });
  };

  handleDone = index => {
    const data = this.state.data;
    data[index].done = !data[index].done;

    this.setState({
      data
    });
  };

  handleSubmit = () => {
    const Data = {
      todo: this.state.todo,
      done: false
    };
    this.setState({ data: this.state.data.concat(Data), todo: "" });
    console.log(this.state);
  };
  render() {
    return (
      <div>
        <input
          type="text"
          name="todo"
          onChange={this.handleChange}
          value={this.state.todo}
        />
        <button onClick={this.handleSubmit}>Add</button>
        <Form data={this.state.data} onDone={this.handleDone} />
      </div>
    );
  }
}

export default Input;
