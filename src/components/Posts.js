import React from 'react'
import Post from "../JsonPassed/RecentPosts";

import ParticularPost from "./ParticularPost";


function Posts() {
    console.log(Post);
    return (
        <div>
            <br/>
                {Post.map((post)=>{
                    
                    return <li style={
                        {listStyle: 'none',
                            
                    }
                    } key={post.id} >
                        <ParticularPost post={post}/>
                     </li>
                })}
            
        </div>
    )
}

export default Posts
