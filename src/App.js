import React, { Component } from 'react';

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
    console.log(process.env.REACT_APP_CLIENTID);
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
    console.log(process.env);
		return (
      <section>
        <nav>
          <form onSubmit={this.handleSubmit}>
            <input type="text" value={this.state.value} onChange={this.handleChange} />
            <button>SEND</button>
          </form>
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
}
export default App;