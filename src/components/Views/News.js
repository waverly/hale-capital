import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import NewsItem from "../Components/NewsItem";
import Footer from "./Footer";
import "./../../css/Views/News.css";

class News extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  extractYear = d => {
    return parseInt(d.slice(0, 4), 10);
  };

  currentYear = new Date().getFullYear();

  render() {
    console.log(this.currentYear);
    if (!this.props.data) return "  ";

    // parse all news entries and create an array of unique year values
    let years = [];
    if (this.props.data.length > 0) {
      this.props.data.map((n, index) => {
        const date = n.data.date;
        let year = this.extractYear(date);

        // see if this year is already in the array
        if (years.indexOf(year) < 0) {
          years.push(year);
          years = years.sort((a, b) => b - a);
        }
      });
    }

    return (
      <div>
        <div className="section-wrap news-wrap">
          {/*  news header  */}
          {/* start header */}
          <div className="news-header">
            <div className="text-left">
              <div className="index">
                <p className="index sans-serif">04</p>
              </div>
              <h1>News</h1>
            </div>
            <div className="text-right">
              {/* loop throuh data and display all dates */}
              {years.map((y, i) => (
                <div className="year-wrap" key={i}>
                  <Link
                    smooth
                    to={`/news#${y}`}
                    className={y === this.currentYear ? "" : "lightgrey"}
                  >
                    <h3 className="year-item">{y}</h3>
                  </Link>
                  <p
                    className={
                      years.indexOf(y) === years.length - 1
                        ? "display-none"
                        : "display-block"
                    }
                  >
                    /
                  </p>
                </div>
              ))}
            </div>
          </div>
          {/* start news entries */}
          <div className="entries">
            {years.map((y, i) => {
              return (
                <div id={y} className="item-wrap" key={i}>
                  <h3>{y}</h3>
                  <div className="news-items">
                    {this.props.data.map((n, i) => {
                      if (parseInt(n.data.date.slice(0, 4), 10) === y) {
                        return <NewsItem key={i} item={n} />;
                      }
                      return null;
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default News;
