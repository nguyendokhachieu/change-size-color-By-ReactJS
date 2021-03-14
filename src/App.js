import { Component } from "react";
import Color from "./components/Color";
import Size from "./components/Size";
import Main from "./components/Main";
import Text from "./components/Text";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      color: "red",
      fontSize: 12,
      text: "Your content goes here",
    };

    this.triggerColor = this.triggerColor.bind(this);
    this.receiveSizeChange = this.receiveSizeChange.bind(this);
    this.receiveText = this.receiveText.bind(this);
  }

  triggerColor(c) {
    this.setState({
      color: c,
    });
  }

  receiveSizeChange(value) {
    if (this.state.fontSize + value >= 4 && this.state.fontSize + value <= 40) {
      this.setState({
        fontSize: this.state.fontSize + value,
      });
    }
  }

  receiveText(text) {
    this.setState({
      text: text,
    });
  }

  render() {
    return (
      <div className="container">
        <div className="top-container">
          <Color triggerColor={this.triggerColor}></Color>
          <Size onReceiveSizeChange={this.receiveSizeChange}></Size>
        </div>
        <Main
          text={this.state.text}
          size={this.state.fontSize}
          color={{ color: this.state.color }}
        ></Main>
        <Text onReceiveText={this.receiveText} />
      </div>
    );
  }
}

export default App;
