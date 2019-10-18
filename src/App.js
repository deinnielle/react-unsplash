import React, { useState } from 'react';
import Searchbar from './components/searchbar';

const App = () => {
  const [value, setValue] = useState('');
  const [images, setImages] = useState([]);
	
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
    <section>
      <nav>
        <form onSubmit={handleSubmit}>
          <Searchbar value={value} handleChange={handleChange} />
          <button>SEND</button>
        </form>
      </nav>
      {images.map(image => (
        <div className="grid-item" key={image.id}>
          <img src={image.urls.regular} alt={image.description} />
          <div className="text">{image.description}</div>
        </div>
      ))}
    </section>
  )
}

export default App;