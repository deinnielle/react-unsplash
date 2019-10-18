import React, { Component } from 'react';

class Searchbar extends React.Component {
    render() {
        return ( 
            <input 
                type="text" 
                value={this.props.value}
                onChange={this.props.handleChange}
             />
        )
    } 
}

export default Searchbar;