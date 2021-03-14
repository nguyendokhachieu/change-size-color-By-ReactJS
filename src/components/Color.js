import { Component } from "react";

class Color extends Component {
  constructor(props) {
    super(props);

    this.state = {
      color: "red",
    };

    this.onInputClick = this.onInputClick.bind(this);
  }

  onInputClick(event) {
    let color = event.target.id;

    this.props.triggerColor(color);
  }

  render() {
    return (
      <div className="color-picker">
        <h3 className="banner">Color Picker</h3>
        <div className="btn-group">
          <input
            className="btn-color red"
            type="button"
            id="red"
            name="red"
            onClick={this.onInputClick}
          />
          <input
            className="btn-color green"
            type="button"
            id="green"
            name="green"
            onClick={this.onInputClick}
          />
          <input
            className="btn-color blue"
            type="button"
            id="blue"
            name="blue"
            onClick={this.onInputClick}
          />
          <input
            className="btn-color gray"
            type="button"
            id="gray"
            name="gray"
            onClick={this.onInputClick}
          />
        </div>
      </div>
    );
  }
}

export default Color;
