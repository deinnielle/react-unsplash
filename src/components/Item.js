import React, { useState, useEffect } from 'react';

const Item = ({match}) => {
  const [data, setData] = useState({
    urls: {},
    user: {},
    exif: {}
  });

  useEffect(() => {
    getData();
  },[data]);

  const getData = async () => {
    const data = await fetch(`https://api.unsplash.com/photos/${match.params.id}?client_id=30086014b47d3da23e1a9b2fa85837f0ca041c5ce34d4bfab637c45988c5ce08`)
    const result = await data.json();
    setData(result);
  }

  return (
    <div>
      <img src={data.urls.small} alt={data.description} />
      <div>
        <ul>
          <li>{data.description}</li>
          <li>{data.alt_description}</li>
          <li>{data.user.name}</li>
          <li>{data.exif.make}</li>
          <li>{data.exif.model}</li>
          <li>{data.exif.exposure_time}</li>
          <li>{data.exif.focal_length}</li>
          <li>{data.exif.iso}</li>
        </ul>
      </div>
    </div>
  )
}

export default Item;