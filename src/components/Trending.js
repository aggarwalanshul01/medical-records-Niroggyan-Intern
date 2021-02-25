import React from 'react'
import "../css/Trending.css";
import Posts from "./Posts";

function Trending(props) {
    return (
        <div>
            <h1 className = 'head_posts'>{(props.Lang=='eng')? <span>Recent Trending Posts</span> : <span style={{fontSize:'35px'}}>हाल ही में ट्रेंडिंग पोस्ट</span>}</h1>
            <Posts Lang={props.Lang}/>
        </div>
    )
}

export default Trending
