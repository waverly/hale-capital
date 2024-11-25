import React from "react";
import Expand from "./Expand";
import "./../../css/Components/Transaction.css";

class Transaction extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    };
    this.handleExpand = this.handleExpand.bind(this);
  }

  handleExpand() {
    if (this.props.noexpand) {
      return null;
    }
    const newExpand = !this.state.expanded;
    this.setState({ expanded: newExpand });
    if (this.panel.style.maxHeight) {
      this.panel.style.maxHeight = null;
    } else {
      this.panel.style.maxHeight = this.panel.scrollHeight + "px";
    }
  }

  render() {
    const t = this.props;
    return (
      <div className="trans-item" onClick={this.handleExpand}>
        <div className="trans-title">
          <h3>{t.data.transactiontitle["0"].text}</h3>
          <Expand expanded={this.state.expanded} />
        </div>
        <div
          className={
            this.state.expanded
              ? "trans-desc panel expanded"
              : "trans-desc panel"
          }
          ref={div => {
            this.panel = div;
          }}
        >
          {t.data.transactiondesc.map((p, index) => (
            <p key={index}>{p.text}</p>
          ))}
        </div>
      </div>
    );
  }
}
export default Transaction;
