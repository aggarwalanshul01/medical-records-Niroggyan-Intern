import React,{useState,useEffect} from 'react'
import Navbar from "./Navbar";
import ReorderIcon from '@material-ui/icons/Reorder';
import MidHeader from './MidHeader';
import "../css/Header.css";



function Header() {
    const [classMain, setclassMain] = useState('nav_full');
    const [scrollHeader, setscrollHeader] = useState('H')
    const navCut=()=>{
        setclassMain('nav_full')
    }
    useEffect(() => {
        const listenScrollEvent =() =>{
            if (window.scrollY > 0) {
                setscrollHeader('header_main_sticky')
            } else {
                setscrollHeader('')
            }
        }
        window.addEventListener('scroll', listenScrollEvent)
    }, [scrollHeader]);
    return (
        <div className={scrollHeader}>
        <div className={classMain}>
                <Navbar crossBut={navCut}/>
        </div>
        <div className='main_head'>
            
            <div className='nav_icon' onClick={()=>setclassMain('nav_full open_nav')}>
                <ReorderIcon fontSize='large' style={{marginBottom:'-10px'}}/>
                
            </div>
            
            <div className='contents'>
                <MidHeader/>
            </div>
        </div>
        </div>
    )
}

export default Header
