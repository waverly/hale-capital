import React from "react";
import Header from "../Components/Header";
import ListItem from "../Components/ListItem";
import Arrow from "../Components/Arrow";
import BlueBox from "../Components/BlueBox";
import Transaction from "../Components/Transaction";
import { Link } from "react-router-dom";

import "./../../css/Views/DirectLending.css";

class DirectLending extends React.Component {
  render() {
    if (this.props.data) {
      const dl = this.props.data.data;

      return (
        <div className="section-wrap direct-lending">
          <Header index="02 Investment Strategies" title="Direct Lending" />

          {/* start columns */}
          <div className="col-wrap">
            <div className="col-left">
              <div className="paragraph serif">
                {dl.description.map((p, index) => (
                  <p key={index}> {p.text} </p>
                ))}
              </div>
            </div>

            <div className="col-right">
              <div className="inner-wrap">
                <img src={dl.image.url} alt="" />
                <p className="caption serif">{dl.caption["0"].text}</p>
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
            {dl.body.map((item, index) => <ListItem key={index} item={item} />)}
            <BlueBox
              left={this.props.width < 1000 ? "15%" : "20vw"}
              top={this.props.width < 1000 ? "15%" : "-5%"}
              width={this.props.width < 1000 ? "70%" : "20vw"}
              height={this.props.width < 1000 ? "85%" : "20vw"}
            />
          </div>
          <div className="transaction-wrap">
            <h3 className="section-title">Transaction Types</h3>
            {dl.transactions.map((t, index) => (
              <Transaction key={index} data={t} />
            ))}
          </div>
        </div>
      );
    } else return " ";
  }
}

export default DirectLending;
