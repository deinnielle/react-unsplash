import React, { useState, useContext, useEffect } from 'react';
import {AppContext} from './Context';
import Items from './Items';

const Search = () => {
  const [images, setImages] = useState([]);
  const [count, setCount, value, setValue] = useContext(AppContext);

  useEffect(() => {
    getData();
  },[count]);

  const getData = async () => {
    const data = await fetch(`https://api.unsplash.com/search/photos/?client_id=30086014b47d3da23e1a9b2fa85837f0ca041c5ce34d4bfab637c45988c5ce08&page=${count}&per_page=12&query=${value}`);
    const response = await data.json();
    setImages(response.results);
  }

  const nextPage = () => {
    setCount(count + 1);
    getData();
  }

  const prevPage = () => {
    if (count > 1) {
      setCount(count - 1);
      getData();
    }
  }

  const handleChange = (event) => {
    setValue(event.target.value);
  }

  const handleSubmit = (event) => {
    setCount(1);
    getData();
    event.preventDefault();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={handleChange} />
        <button>SEND</button>
      </form>
      <Items data={images} />
      <div>
        <button onClick={prevPage}>PREV</button>
        <button onClick={nextPage}>NEXT</button>
      </div>
    </div>
  );
}

export default Search;