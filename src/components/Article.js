import React from "react";
import { Link } from "react-router-dom";

const Article = ({ articles }) => (
    <>
        {articles.map ((post,key) => (
            <Link className="post-list-item" to={`/blogs/${post.name}`}>
                <div className="blog-post">
                    <h3>{post.title}</h3>
                    <p>{post.content[0].substring(0,150)}...</p>
                </div>
            </Link>
        ))}
    </>
);

export default Article;