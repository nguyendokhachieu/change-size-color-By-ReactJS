import { Component } from "react";

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      color: "red",
    };
  }

  render() {
    return (
      <div className="bottom-container">
        <div className="info">
          Color: {this.props.color.color} <br /> Fontsize: {this.props.size}px
        </div>
        <div
          style={{
            color: this.props.color.color,
            borderColor: this.props.color.color,
            fontSize: this.props.size,
          }}
          className="main"
        >
          {this.props.text === ""
            ? "Your content goes here . . ."
            : this.props.text}
        </div>
      </div>
    );
  }
}

export default Main;
