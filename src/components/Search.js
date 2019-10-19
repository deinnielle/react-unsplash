import React, { useState, useEffect } from 'react';

const SearchBar = () => {
	const [value, setValue] = useState('random');
  const [images, setImages] = useState([]);
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    fetch(`https://api.unsplash.com/search/photos/?client_id=${process.env.REACT_APP_CLIENTID}&page=${count}&per_page=10&query=${value}`)
    .then(res => res.json())
    .then((result) => {
      setImages(result.results);
    })

  },[value])

  const nextPage = event => {
 
    setCount(count + 1);
    
    console.log('next ' + count)
    
    fetch(`https://api.unsplash.com/search/photos/?client_id=${process.env.REACT_APP_CLIENTID}&page=${count}&per_page=10&query=${value}`)
    .then(res => res.json())
    .then((result) => {
      setImages(result.results);
    })
    event.preventDefault();
  }
  
  const prevPage = event => {

    setCount(count - 1);
    console.log('prev ' + count)

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

	return (
    <div>
      {console.log('return ' + count)}
      
      <div>
        <button onClick={prevPage}>PREV</button>
        <button onClick={nextPage}>MORE</button>
      </div>
      <form>
        <input type="text" value={value} onChange={handleChange} />
        <button>SEND</button>
      </form>
      {images.map(image => (
        <div className="grid-item" key={image.id}>
          <img src={image.urls.regular} alt={image.description} />
          <div className="text">{image.description}</div>
        </div>
      ))}
    </div>
	)
}

export default SearchBar;