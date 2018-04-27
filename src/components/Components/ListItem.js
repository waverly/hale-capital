import React from "react";
import "./../../css/Components/ListItem.css";

const ListItem = props => {
  const root = props.item;
  const title = root.primary.listtitle["0"].text;
  const lis = root.items;
  return (
    <div className="list-item">
      <h4 className="title sans-serif">{title}</h4>
      {/* add logic here to only print lis if there is a listdescription value */}
      {lis.map((item, index) => {
        return (
          <h4 className="serif" key={index}>
            {item.listdescription["0"].text}
          </h4>
        );
      })}
    </div>
  );
};

export default ListItem;
