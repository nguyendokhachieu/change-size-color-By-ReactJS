import { Component } from "react";

class Size extends Component {
  constructor(props) {
    super(props);

    this.changeSize = this.changeSize.bind(this);
  }

  changeSize(value) {
    this.props.onReceiveSizeChange(value);
  }

  render() {
    return (
      <div className="size-picker">
        <h3 className="banner">Size Picker</h3>
        <div className="btn-group">
          <input
            onClick={() => this.changeSize(2)}
            type="button"
            id="increase"
            name="increase"
            value="Increase"
            className="btn-size"
          />
          <input
            onClick={() => this.changeSize(-2)}
            type="button"
            id="decrease"
            name="decrease"
            value="Decrease"
            className="btn-size"
          />
        </div>
      </div>
    );
  }
}

export default Size;
