import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value
  };

  hanldeIncrement = product => {
    console.log(product);
    this.setState({ value: this.state.count + 1 });
  };

  doHandleIncrement = () => {
    this.hanldeIncrement({ id: 1 });
  };

  render() {
    return (
      <div>
        {this.props.children}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.doHandleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "zero" : count;
  }
}

export default Counter;
