import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: this.props.value
  };

  hanldeIncrement = product => {
    console.log(product);
    this.setState({ count: this.state.count + 1 });
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

        <button
          onClick={() => this.props.onDelete(this.props.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
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
