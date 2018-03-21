import React from "react";

class SpanLetter extends React.Component {
  constructor() {
    super();
    this.state = {
      opacity: 0
    };
  }

  componentDidMount() {
    const delay = this.props.delay;
    setTimeout(
      function(delay) {
        this.setState({ opacity: 1 });
      }.bind(this),
      delay
    );
  }

  render() {
    return (
      <span
        style={{
          opacity: this.state.opacity,
          transition: "all 2s"
        }}
      >
        {this.props.letter}
      </span>
    );
  }
}

export default SpanLetter;
