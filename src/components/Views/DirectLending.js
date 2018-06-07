import React from "react";
import Header from "../Components/Header";
import ListItem from "../Components/ListItem";
import Arrow from "../Components/Arrow";
import Footer from "./Footer";
import BlueBox from "../Components/BlueBox";
import Transaction from "../Components/Transaction";
import { Link } from "react-router-dom";

import "./../../css/Views/DirectLending.css";

class DirectLending extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    if (this.props.data) {
      const dl = this.props.data.data;

      return (
        <div>
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
                  <p className="caption">{dl.caption["0"].text}</p>
                  <div className="view-investments">
                    <Link to={`/portfolio?filter=directlending`}>
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
              {dl.body.map((item, index) => (
                <ListItem key={index} item={item} />
              ))}
              <BlueBox
                left={this.props.width < 1000 ? "15%" : "10%"}
                top={this.props.width < 1000 ? "2%" : "0%"}
                width={this.props.width < 1000 ? "70%" : "80%"}
                height={this.props.width < 1000 ? "85%" : "100%"}
              />
            </div>
            <div className="transaction-wrap dl-trans-wrap">
              <h3 className="section-title">Transaction Types</h3>
              {dl.transactions.map((t, index) => (
                <Transaction noexpand key={index} data={t} />
              ))}
            </div>
          </div>
          <Footer />
        </div>
      );
    } else return " ";
  }
}

export default DirectLending;
