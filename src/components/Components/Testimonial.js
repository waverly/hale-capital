import React from "react";
import BlueBox from "./BlueBox";
import "./../../css/Components/Testimonial.css";

class Testimonial extends React.Component {
  constructor() {
    super();

    // this.handleBold = this.handleBold.bind(this);
  }

  handleBold(item) {
    let phrase = item.text;
    console.log(phrase);
    if (item.spans.length > 0) {
      let counter = 0;
      item.spans.forEach(i => {
        let arr = phrase.split("");
        let first = i.start + counter;
        let last = i.end + 1 + counter;
        arr.splice(first, 0, "<bold>");
        arr.splice(last, 1, "</bold> ");
        phrase = arr.join("");
        counter += 23;
      });
    }
    return { __html: phrase };
  }

  render() {
    const root = this.props.data;
    return (
      <div className="testimonial">
        <div className="inner-wrap">
          <div className="quote-icon">"</div>
          <div className="text-wrap">
            <p className="serif">{root.quote["0"].text}</p>
            &#8212;
            <p
              className="author"
              dangerouslySetInnerHTML={this.handleBold(root.author["0"])}
            />
          </div>
        </div>
        <BlueBox
          left={this.props.width < 1000 ? "0%" : "-50px"}
          top={this.props.width < 1000 ? "0%" : "-75px"}
          width={this.props.width < 1000 ? "250px" : "250px"}
          height={this.props.width < 1000 ? "250px" : "250px"}
        />
      </div>
    );
  }
}

export default Testimonial;
