import React, { useState } from 'react';

const SearchBar = () => {
	const [value, setValue] = useState('');
  const [images, setImages] = useState([]);
  const [count, setCount] = useState(2)

  const nextPage = event => {
    setCount(prevCount => prevCount + 1)
    console.log(count);
    
    fetch(`https://api.unsplash.com/search/photos/?client_id=${process.env.REACT_APP_CLIENTID}&page=${count}&per_page=10&query=${value}`)
    .then(res => res.json())
    .then((result) => {
      setImages(result.results);
    })
    event.preventDefault();
  }
  
  const prevPage = event => {
    setCount(prevCount => prevCount -1)
    console.log(count);
    fetch(`https://api.unsplash.com/search/photos/?client_id=${process.env.REACT_APP_CLIENTID}&page=${count}&per_page=10&query=${value}`)
    .then(res => res.json())
    .then((result) => {
      setImages(result.results);
    })
    event.preventDefault();

  }

  const handleChange = event => {
    setValue(event.target.value);
  }

  const handleSubmit = event => {
    fetch(`https://api.unsplash.com/search/photos/?client_id=${process.env.REACT_APP_CLIENTID}&page=1&per_page=10&query=${value}`)
    .then(res => res.json())
    .then((result) => {
      setImages(result.results);
    })
    event.preventDefault();
  }

	return (
    <nav>
      <form onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={handleChange} />
        <button>SEND</button>
      </form>
      <div>
          <button onClick={prevPage}>-1 Page</button>
          <button onClick={nextPage}>Load More</button>
      </div>
      {images.map(image => (
        <div className="grid-item" key={image.id}>
          <img src={image.urls.regular} alt={image.description} />
          <div className="text">{image.description}</div>
        </div>
      ))}
    </nav>
	)
}
export default SearchBar;