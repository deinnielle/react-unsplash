import React from 'react';
import './style.scss';

// The { text } is deconstructed from props. 
// Instead of writing (props) and then props.text you can deconstruct props into { text, onClick, color }
// or whatever you chose to pass through, when you add the component in App.js you just add the 
// props you want to follow. <Button text="SEND" color="blue" onClick={handleClick} /> etc.
const Button = ({ text }) => {
  return <button>{text}</button>;
};

export default Button;
