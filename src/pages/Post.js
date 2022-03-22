import React from 'react';
import { useParams } from 'react-router-dom';
import Content from './Content';
import NotFound from './NotFound';
import Article from '../components/Article';
import Header from './Header';

const Post = () => {

  const { name } = useParams();
    // const name = match.params.name;
   const blogPost = Content.find(post => post.name === name);
   

   //with empty array, useEffect is only called when component is firstly load
   /* useEffect(() => { 
        const fetchData = async() => {
         
            const result= await fetch(`http://localhost:8000/api/articles/${name}`);

            const body = await result.json();
           // const body = await JSON.stringify(result);
        //    console.log({ body });
        
            setArticleInfo(body);
        };
        fetchData();
        //setArticleInfo({ upvotes: Math.ceil(Math.random()*10)});
    },[ name ]);*/

        if (!blogPost) return (
            <>
                <NotFound />
            </>
        )


        const otherArticles = Content.filter(post => post.name !==name);

        return (
            <>
            <Header/>
                <h1> This is the {blogPost.title} articles</h1>
                {/* <p>This post has been upvoted {articleInfo.upvotes} times</p> 
                {blogPost.content.map((par, key) => (
                <p key={key}>{ par }</p>))}*/}
                <p>{blogPost.content}</p>
                <div className='other-blogs'>
                    <h2>Related Blogs:</h2>
                    <Article articles={ otherArticles } />
                </div>
            </>
        )
};

export default Post;