import React, { useState, useEffect } from 'react';

const SearchBar = () => {
	const [value, setValue] = useState('random');
  const [images, setImages] = useState([]);
  const [count, setCount] = useState(1);
  
  useEffect(() => {
    getData();
  },[value, count]);
  
  const getData = () => {
    fetch(`https://api.unsplash.com/search/photos/?client_id=${process.env.REACT_APP_CLIENTID}&page=${count}&per_page=10&query=${value}`)
    .then(res => res.json())
    .then((result) => {
      setImages(result.results);
    })
    console.log('getdata ' + value)
  }

  const nextPage = event => {
    setCount(count + 1);
    getData();
    console.log('next ' + count + ' ' + value)
    event.preventDefault();
  }
  
  const prevPage = event => {
    if (count <= 1) {
      setCount(1);
    } else {
      setCount(count - 1);
    }
    getData();
    console.log('prev ' + count + ' ' + value)
    event.preventDefault();
  }

  const handleChange = event => {
    setValue(event.target.value);
    if (count > 1) {
      setCount(1);
    }
  }

  const handleSubmit = event => {
    getData();
    event.preventDefault();
  }

	return (
    <div>
      {console.log('return ' + count + ' ' + value)}
      <form onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={handleChange} />
      </form>
      {images.map(image => (
        <div className="grid-item" key={image.id}>
          <img src={image.urls.regular} alt={image.description} />
          <div className="text">{image.description}</div>
        </div>
      ))}
      <div>
        <button onClick={prevPage}>PREV</button>
        <button onClick={nextPage}>MORE</button>
      </div>
    </div>
	)
}

export default SearchBar;