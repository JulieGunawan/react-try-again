import React from 'react';
import Header from './Header';
import Article from '../components/Article';
import Content from './Content';

const Blogs = () =>(
    <>
        <Header />
        <h1>Welcome to My Blogs</h1>
        <Article articles ={ Content} />
    </>
);

export default Blogs;