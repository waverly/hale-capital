import React from "react";
import "./../../css/Components/NewsItem.css";

const NewsItem = props => {
  const root = props.item.data;
  return (
    <div className="news-item">
      <div className="text-wrap">
        <p className="date">{root.date}</p>
        <h3 className="title">{root.title["0"].text}</h3>
        {root.excerpt.length > 0 && (<p className="excerpt">{root.excerpt["0"].text}</p>)}

        <a
          target="_blank"
          href={root.link.url ? root.link.url : "#"}
          className="read-more"
        >
          Read More{" "}
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
