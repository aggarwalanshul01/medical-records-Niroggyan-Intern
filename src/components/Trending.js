import React from 'react'
import "../css/Trending.css";
import Posts from "./Posts";

function Trending() {
    return (
        <div>
            <h1 className = 'head_posts'>Recent Trending Posts</h1>
            <Posts/>
        </div>
    )
}

export default Trending
