import React from "react";
import Header from "../Components/Header";
import ListItem from "../Components/ListItem";
import Arrow from "../Components/Arrow";
import BlueBox from "../Components/BlueBox";
import Transaction from "../Components/Transaction";
import { Link } from "react-router-dom";

import "./../../css/Views/PrivateEquity.css";

class PrivateEquity extends React.Component {
  render() {
    if (this.props.data) {
      const root = this.props.data.data;

      return (
        <div className="section-wrap private-equity">
          <Header index="02 Investment Strategies" title="Private Equity" />

          {/* start columns */}
          <div className="col-wrap">
            <div className="col-left">
              <div className="paragraph serif">
                {root.description.map((p, index) => (
                  <p key={index}> {p.text} </p>
                ))}
              </div>
            </div>

            <div className="col-right">
              <div className="inner-wrap">
                <img src={root.image.url} alt="" />
                <p className="caption serif">{root.caption["0"].text}</p>
                <div className="view-investments">
                  <Link to={`/portfolio`}>
                    <h3 className="serif">
                      View Select Investments
                      <Arrow direction="right" />
                    </h3>
                  </Link>
                </div>
              </div>{" "}
            </div>
          </div>
          {/*  end columns */}
          {/* start list section */}
          <div className="list-wrap">
            {root.body.map((item, index) => (
              <ListItem key={index} item={item} />
            ))}
            <BlueBox left="15%" top="-5%" width="60%" height="95%" />
          </div>
          <div className="transaction-wrap">
            <h3 className="section-title">Transaction Types</h3>
            {root.transactions.map((t, index) => (
              <Transaction key={index} data={t} />
            ))}
          </div>
        </div>
      );
    } else return "Loading...";
  }
}

export default PrivateEquity;
