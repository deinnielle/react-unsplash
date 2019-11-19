import React from 'react';
import {Link} from 'react-router-dom';

const Items = (props) => {
  return (
    <div>
    {props.data.map(image => (
      <Link to={`/item/${image.id}`} key={image.id}>
        <div className="grid-item">
          <img src={image.urls.regular} alt={image.description} />
          <div className="text">{image.description}</div>
        </div>
      </Link>
    ))}
    </div>
  );
}

export default Items;