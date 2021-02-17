import React,{useState, useEffect} from 'react';
import axios from 'axios';

function TiedUp() {
     const [Tied, setTied] = useState('');
     useEffect(() => {
         axios.get('/ab').then((res)=>{
            //  console.log(res);
             setTied(res.data);
         }).catch((err)=>{
             console.error(err);
         })
        
     })

    return (
        <div>
            {Tied}  
        </div>
    )
}

export default TiedUp;
