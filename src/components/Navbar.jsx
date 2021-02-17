import React from 'react'
import '../css/Navbar.css'
import DashboardIcon from '@material-ui/icons/Dashboard';
import AccessibleIcon from '@material-ui/icons/Accessible';
import PersonIcon from '@material-ui/icons/Person';
import PaymentIcon from '@material-ui/icons/Payment';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import Contents from './contents';
import CancelIcon from '@material-ui/icons/Cancel';
import Tests from '../JsonPassed/Tests';
import ComputerIcon from '@material-ui/icons/Computer';

const icon=[<DashboardIcon/>,<LocalHospitalIcon/>]
const menu=['Dashboard','All Profiles'];
const profiles=[];
for(let i=0;i<Tests.length;i++){
    profiles.push(Tests[i].profileName);
}
console.log(profiles);

function Navbar(props) {
    // console.log(props.crossBut);
    return (
        <div className='nav_main'>
            {props.crossBut!=null &&
                <div className='cutButton' onClick={props.crossBut}><CancelIcon/></div>
            } 
            
            <div className='nav_logo'>
                <img  src='./img/logo.jpg' alt='logo' width='150px'/>
            </div>
            <div className='content_1'>
                <h3 className ='heading_med'>MEDICINE</h3>
                <Contents icon={()=>icon[0]} menu={menu[0]} to=''/>
                {(Tests.length==0)?null:<Contents icon={()=>icon[1]} menu={menu[1]} to={menu[1]}/>}
                {profiles.map((i,index)=>{
                    let to=i;
                    
                    return <Contents icon={()=><ComputerIcon/>} menu={i} to={to} />
                })}
                
            </div>
            
        </div>
        
    )
}

export default Navbar
