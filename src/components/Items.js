import React from "react";
import { Link } from "react-router-dom";

const Items = props => {
  return (
    <div>
      {props.data.map(image => (
        <Link to={`/item/${image.id}`} key={image.id}>
          <div className="grid-item">
            <img src={image.urls.small} alt={image.alt_description} />
            {image.alt_description ? (
              <p>
                {image.alt_description.length > 20
                  ? image.alt_description.slice(0, 20)
                  : image.alt_description}
              </p>
            ) : (
              <p>No description</p>
            )}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Items;
