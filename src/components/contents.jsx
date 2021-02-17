import React from 'react'
import { Route, Link,NavLink } from "react-router-dom";
import '../css/contents.css'
import Button from '@material-ui/core/Button';
const butStyle={
    marginBottom: '4px',
    padding:'5px'
   
    
    // color: 'blue'
}
function contents(props) {
    let to=props.to.toUpperCase();
    // console.log(to);
    // console.log(str);
    return (
        <NavLink exact className='navlink_normal' activeClassName='navlink_active' to={`/${to}`}>
        <div className='span_main'>
        <Button >
            <span className='icon'>{props.icon()}</span>
            <span className='menu'>{props.menu}</span>
        </Button>
        </div>
        </NavLink>
    )
}

export default contents
