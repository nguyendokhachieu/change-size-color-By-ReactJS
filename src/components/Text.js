import { Component } from "react";

class Text extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "Type something . . .",
    };
    this.onTextChange = this.onTextChange.bind(this);
    this.onFocusInput = this.onFocusInput.bind(this);
  }

  onTextChange(event) {
    this.setState({
      text: event.target.value,
    });
    this.props.onReceiveText(event.target.value);
  }

  onFocusInput() {
    this.setState({
      text: "",
    });
  }

  render() {
    return (
      <div className="text-input">
        <input
          onFocus={this.onFocusInput}
          value={this.state.text}
          onChange={this.onTextChange}
          type="text"
          placeholder="Type something . . ."
        />
      </div>
    );
  }
}

export default Text;
