import React,{useState,useEffect} from 'react';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import '../css/MidHeader.css'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Button from '@material-ui/core/Button';
import AllOutIcon from '@material-ui/icons/AllOut';
import { Switch , Route,Link ,Redirect} from "react-router-dom";
import HomeIcon from '@material-ui/icons/Home';

export default function PrimarySearchAppBar(props) {
    const [classSearch, setclassSearch] = useState('search')
    const [searchval, setsearchval] = useState('');
    const rediect=(e)=>{
            
        if(e.key == 'Enter'){
            window.location.href = `http://localhost:3000/${searchval}`
        }
    
    }
    
  return (
    <div className='main_header' >
        <span className={classSearch}>
            <span >
            <SearchIcon style={{marginBottom:'-6px',marginRight:'4px',width:'10%'}}/>
            </span>
            <InputBase style={{width:'80%'}} value={searchval} onChange={(e)=>{
                setsearchval(e.target.value)
            }} onKeyPress={rediect}
                placeholder="Search…"
            />
            
        </span>
        <span className='buttons' >
        <span title="Go To Home" className='largeButton'>
            <Button variant="contained" color="primary" style={{marginRight:'13px'}} onClick={()=>{
                window.location.href = `http://localhost:3000/`
                // console.log(props.engtohindi);
            }}>
            <span style={{marginTop:'3.5px'}}>Home</span><HomeIcon/>
            </Button>
            </span>
            <span title="Go To Home" className='smallButton'>
            <Button variant="contained" color="primary" style={{marginRight:'13px'}} onClick={()=>{
                window.location.href = `http://localhost:3000/`
                // console.log(props.engtohindi);
            }}>
            <HomeIcon/>
            </Button>
            </span>
            <span title="Change Language to English" className='largeButton'>
            <Button variant="contained" color="primary" style={{marginRight:'13px'}} onClick={()=>{
                props.hinditoeng();
                // console.log(props.hinditoeng);
            }}>
                <span style={{marginTop:'3px'}}>English</span><AllOutIcon/>
            </Button>
            </span>
            <span title="Change Language to English" className='smallButton'>
            <Button variant="contained" color="primary" style={{marginRight:'13px'}} onClick={()=>{
                props.hinditoeng();
                
            }}>
                Eng
            </Button>
            </span>
            <span title="Change Language to Hindi" className='largeButton'>
            <Button variant="contained" color="primary" style={{marginRight:'13px'}} onClick={()=>{
                props.engtohindi();
                // console.log(props.engtohindi);
            }}>
            <span style={{marginTop:'3px'}}>हिन्दी</span><AllOutIcon/>
            </Button>
            </span>
            <span title="Change Language to Hindi" className='smallButton'>
            <Button variant="contained" color="primary" style={{marginRight:'13px'}} onClick={()=>{
                props.engtohindi()
                // console.log(props.engtohindi);
            }}>
            हिन्दी
            </Button>
            </span>
            <span title="Leave the page" className='smallButton' >
            {/* <a href=" " title="This is some text I want to display." style={{backgroundColor:'#FFFFFF',color:'#000000',textDecoration:'none'}}>This link has mouseover text.</a> */}
            <Button variant="contained" color="secondary" style={{marginRight:'13px'}}>
                <ExitToAppIcon/>
            </Button>
            </span>
            <span title="Leave the page" className='largeButton'>
            {/* <a href=" " title="This is some text I want to display." style={{backgroundColor:'#FFFFFF',color:'#000000',textDecoration:'none'}}>This link has mouseover text.</a> */}
            <Button variant="contained" color="secondary" style={{marginRight:'13px'}}>
                SignUp<ExitToAppIcon/>
            </Button>
            </span>
        </span>
    </div>
  );
}


