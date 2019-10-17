import React, { useState } from 'react';

const App = () => {
  const [value, setValue] = useState('');
  const [images, setImages] = useState([]);
	
	const handleChange = event => {
		setValue(event.target.value);
	}

	const handleSubmit = event => {
    fetch(`https://api.unsplash.com/search/photos/?client_id=${process.env.REACT_APP_CLIENTID}&page=1&per_page=10&orientation=portrait&query=` + value)
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
          <input type="text" value={value} onChange={handleChange} />
          <button>SEND</button>
        </form>
      </nav>
      {images.map(image => (
        <div class="grid-item">
          <img src={image.urls.regular} key={image.id} alt={image.description} />
          <div class="text">{
            `${image.alt_description.substring(0,20)}`
          }</div>
        </div>
      ))}
    </section>
  );
}

export default App;