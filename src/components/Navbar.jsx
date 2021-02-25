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
import {TEST_DATABASE, TEST_DATABASE_MAPPING, DIC} from '../JsonPassed/testsDatabase';
import testsOriginal from '../JsonPassed/curTestCopy';

const icon=[<DashboardIcon/>,<LocalHospitalIcon/>]
const menu=['Dashboard','All Profiles'];

const profiles=[],map={};
for(let i=0;i< testsOriginal.length;i++){
    if(!map[DIC[TEST_DATABASE_MAPPING[testsOriginal[i].TestName]]]){
    profiles.push(DIC[TEST_DATABASE_MAPPING[testsOriginal[i].TestName]]);
    map[DIC[TEST_DATABASE_MAPPING[testsOriginal[i].TestName]]]=1;
    }
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
                <h3 className ='heading_med'>{(props.Lang=='eng')? <span>COMPONENTS</span> : <span>अवयव</span>}</h3>
                <Contents icon={()=>icon[0]} menu={(props.Lang=='eng')?'DASHBOARD' : 'DASHBOARD'} to=''/>
                {(Tests.length==0)?null:<Contents icon={()=>icon[1]} menu={(props.Lang=='eng')?'All Profiles' : 'All Profiles'} to={menu[1]}/>}
                {profiles.map((i,index)=>{
                    let to=i;
                    
                    return <Contents icon={()=><ComputerIcon/>} menu={i} to={to} />
                })}
                
            </div>
            
        </div>
        
    )
}

export default Navbar
