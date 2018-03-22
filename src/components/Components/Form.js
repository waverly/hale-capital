import React from "react";
import BlueBox from "./BlueBox";
import "./../../css/Components/Form.css";

class Form extends React.Component {
  constructor() {
    super();
    this.state = {};

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    console.log("form was submitted");
    alert("form submit!");
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    const root = this.props.data;
    return (
      <div className="form-wrap">
        <h3>Send us a message</h3>
        <form
          onSubmit={this.handleSubmit}
          method="POST"
          action="https://formspree.io/waverly.rose.mandel@gmail.com"
        >
          <div className="input-wrap">
            <input
              type="text"
              name="name"
              placeholder="Your name"
              onChange={this.handleInputChange}
            />

            <input
              type="email"
              name="email"
              placeholder="Your email"
              onChange={this.handleInputChange}
            />
          </div>

          <textarea name="message" placeholder="Your message" />

          <button type="submit">Submit now</button>
        </form>
        <BlueBox
          left="0"
          top="0"
          width={this.props.width < 1000 ? "98%" : "120%"}
          height="100%"
        />
      </div>
    );
  }
}

export default Form;
