import React, { Component } from 'react';

import navIcon1 from "../assets/nav-icon1.svg";
import navIcon3 from "../assets/nav-icon3.svg";
import navIcon5 from "../assets/nav-icon5.svg";

import "../styles/social.css";


export default class Social extends Component {
  render() {
    return (
        <div className='social-container'>
            <div className='social-heading'>Connect With Me:</div>

            <div className='social-icon'>
                <a href='https://www.linkedin.com/in/sanjay-nathwani-07656020a/' target="_blank" rel="noopener noreferrer"><img src={navIcon1} alt="icon1" /></a>
                <a href='https://github.com/Sanjay-Nathwani/' target="_blank" rel="noopener noreferrer"><img src={navIcon5} alt="icon5" /></a>
                <a href='https://www.instagram.com/sanju_16_10/' target="_blank" rel="noopener noreferrer"><img src={navIcon3} alt="icon3" /></a>
            </div>
        </div>
    )
  }
}
