import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';

const Search = () => {
  const [value, setValue] = useState('random');
  const [images, setImages] = useState([]);
  const [count, setCount] = useState(1);

  useEffect(() => {
    getData();
  },[count]);

  const getData = async () => {
    const data = await fetch(`https://api.unsplash.com/search/photos/?client_id=${process.env.REACT_APP_CLIENTID}&page=${count}&per_page=12&query=${value}`)
    const result = await data.json();
    setImages(result.results);
  }

  const nextPage = (event) => {
    setCount(count + 1);
    getData();
    event.preventDefault();
  }

  const prevPage = event => {
    if (count > 1) {
      setCount(count - 1);
      getData();
    }
    event.preventDefault();
  }

  const handleChange = event => {
    setValue(event.target.value);
    setCount(1);
  }

  const handleSubmit = event => {
    getData();
    event.preventDefault();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={handleChange} />
        <button>SEND</button>
      </form>
      {images.map(image => (
        <Link to={`/p/${image.id}`} key={image.id}>
        <div className="grid-item">
          <img src={image.urls.regular} alt={image.description} />
          <div className="text">{image.description}</div>
        </div>
        </Link>
      ))}
      <div>
        <button onClick={prevPage}>PREV</button>
        <button onClick={nextPage}>MORE</button>
      </div>
    </div>
  )
}

export default Search;