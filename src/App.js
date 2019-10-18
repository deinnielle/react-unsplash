<<<<<<< HEAD
import React, { Component } from 'react';
import Searchbar from './components/searchbar';
class App extends Component {
  constructor() {
		super();
    this.state = {
      value: '',
      images: [],
    };
	
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	
	handleChange(event) {
    this.setState({value: event.target.value});
	}
  
	handleSubmit(event) {
    fetch(`https://api.unsplash.com/search/photos/?client_id=${process.env.REACT_APP_CLIENTID}&page=1&per_page=10&orientation=portrait&query=` + this.state.value)
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          images: result.results,
            total: result.total,
            value: this.state.value
          });
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
      )
      event.preventDefault();
    }

	render() {
		return (
      <section>
        <nav>
          <Searchbar />
        </nav>
        {this.state.images.map(image => (
          <div class="grid-item">
            <img src={image.urls.regular} key={image.id} alt={image.description} />
            <div class="text">{image.alt_description}</div>
          </div>
        ))}
      </section>
		);
	}
=======
import React, { useState } from 'react';

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
          <input type="text" value={value} onChange={handleChange} />
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
>>>>>>> upstream/master
}

export default App;