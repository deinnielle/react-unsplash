import React from "react";
import { Link } from "react-router-dom";

const Items = props => {
  return (
    <div>
      {props.data.map(image => (
        <Link to={`/item/${image.id}`} key={image.id}>
          <div className="grid-item">
            <img src={image.urls.small} alt={image.description} />
            <p className="text">{image.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Items;
