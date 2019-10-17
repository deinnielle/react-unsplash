import React, { Component } from 'react';

class Searchbar extends Component {
    constructor() {
	super();
    this.state = {
      value: '',
    };
	
		this.handleChange = this.handleChange.bind(this);
	}
	
	handleChange(event) {
    this.setState({value: event.target.value});
	}
  
    render() {
        return ( 
        <form onSubmit={this.handleSubmit}>
            <input 
                type="text" 
                value={this.state.value}
                onChange={this.handleChange}
             />
            <button>SEND</button>
        </form>);
    } 
}

export default Searchbar;