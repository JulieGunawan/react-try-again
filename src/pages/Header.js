import React from 'react';
import { Link } from 'react-router-dom';
import imageHero from '../assets/web-logo.jpg';

const Header = () =>(
    <>
    <nav className='mainMenu'>
    <ul>
        <li><Link to ="/"><img src={imageHero} alt="my created logo me-web" width="100px" height="50px;"></img></Link></li>
        <li><Link to ="/about">About</Link></li>
        <li><Link to ="/contact">Contact</Link></li>
        <li><Link to ="/blogs">Blogs</Link></li>
    </ul>
  
    </nav>
    </>
);

export default Header;