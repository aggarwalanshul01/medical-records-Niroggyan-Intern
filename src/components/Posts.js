import React from 'react'
import Post from "../JsonPassed/RecentPosts";

import ParticularPost from "./ParticularPost";


function Posts(props) {
    console.log(Post);
    return (
        <div>
            <br/>
                {Post.map((post)=>{
                    
                    return <li style={
                        {listStyle: 'none',
                            
                    }
                    } key={post.id} >
                        <ParticularPost post={post} Lang={props.Lang}/>
                     </li>
                })}
            
        </div>
    )
}

export default Posts
