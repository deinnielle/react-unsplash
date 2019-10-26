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
    // https://api.unsplash.com/photos/4rDCa5hBlCs?client_id=30086014b47d3da23e1a9b2fa85837f0ca041c5ce34d4bfab637c45988c5ce08
    const data = await fetch(`https://api.unsplash.com/photos/${match.params.id}?client_id=${process.env.REACT_APP_CLIENTID}`)
    const result = await data.json();
    setData(result);
  }

  return (
    <div>
      <img src={data.urls.regular} alt={data.description} />
      <div>
        <p>{data.description}</p>
        <p>{data.alt_description}</p>
        <p>{data.user.name}</p>
        <p>{data.exif.make}</p>
        <p>{data.exif.model}</p>
        <p>{data.exif.exposure_time}</p>
        <p>{data.exif.focal_length}</p>
        <p>{data.exif.iso}</p>
      </div>
    </div>
  )
}

export default Item;