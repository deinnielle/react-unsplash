import React, { useState, useContext, useEffect } from "react";
import { AppContext } from "./Context";
import Items from "./Items";

const Search = () => {
  const [images, setImages] = useState([]);
  const [count, setCount, value, setValue] = useContext(AppContext);

  useEffect(() => {
    if (value) {
      getData();
    } else {
      getInitialData();
    }
  }, [count]);

  const getInitialData = async () => {
    const data = await fetch(
      `https://api.unsplash.com/photos/random?client_id=${process.env.REACT_APP_CLIENTID}&count=15`
    );
    const response = await data.json();
    setImages(response);
  };

  const getData = async () => {
    const data = await fetch(
      `https://api.unsplash.com/search/photos/?client_id=${process.env.REACT_APP_CLIENTID}&page=${count}&per_page=12&query=${value}`
    );
    const response = await data.json();
    setImages(response.results);
  };

  const nextPage = () => {
    setCount(count + 1);
    getData();
  };

  const prevPage = () => {
    if (count > 1) {
      setCount(count - 1);
      getData();
    }
  };

  const handleChange = event => {
    setValue(event.target.value);
  };

  const handleSubmit = event => {
    if (value) {
      setCount(1);
      getData();
    }
    event.preventDefault();
  };

  if (value) {
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
  } else {
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={value}
            onChange={handleChange}
            placeholder="search"
            required
          />
          <button>SEND</button>
        </form>
        <Items data={images} />
      </div>
    );
  }
};

export default Search;