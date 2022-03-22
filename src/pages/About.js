import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';

const About = () =>(
    <>
        <Header />
        <h1>About Me</h1>
        <Outlet />
    </>
);

export default About;