import React from "react";
import Header from "../Components/Header";
import ListItem from "../Components/ListItem";
import Arrow from "../Components/Arrow";
import BlueBox from "../Components/BlueBox";
import Transaction from "../Components/Transaction";
import Footer from "./Footer";
import { Link } from "react-router-dom";

import "./../../css/Views/PrivateEquity.css";

class PrivateEquity extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    if (this.props.data) {
      const root = this.props.data.data;

      return (
        <div>
          <div className="section-wrap private-equity">
            <Header index="02 Investment Strategies" title="Growth Equity" />

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
                  <p className="caption">{root.caption["0"].text}</p>
                  <div className="view-investments">
                    <Link to={`/portfolio?filter=privateequity`}>
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
              <BlueBox
                left={this.props.width < 1000 ? "15%" : "20vw"}
                top={this.props.width < 1000 ? "5%" : "-5%"}
                width={this.props.width < 1000 ? "70%" : "50vw"}
                height={this.props.width < 1000 ? "85%" : "100%"}
              />
            </div>
            <div className="transaction-wrap">
              <h3 className="section-title">Transaction Types</h3>
              {root.transactions.map((t, index) => (
                <Transaction key={index} data={t} />
              ))}
            </div>
          </div>
          <Footer socials={this.props.socials} />
        </div>
      );
    } else return "Loading...";
  }
}

export default PrivateEquity;
