import React, { Component } from 'react';

class Searchbar extends React.Component {
    render() {
        return (
            <form onSubmit={this.props.handleSubmit}>
                <input 
                type="text" 
                value={this.props.value}
                onChange={this.props.handleChange}
                />
                <button>SEND</button>
            </form>
        )
    } 
}

export default Searchbar;