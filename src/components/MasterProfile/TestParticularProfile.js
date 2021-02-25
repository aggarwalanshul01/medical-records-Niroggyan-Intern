import React,{useState} from 'react'
import '../../css/MasterProfile/TestParticularProfile.css'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

import ParticularTest from './ParticularTest';

function TestParticularProfile(props) {
    const [one, setone] = useState(0);
    // console.log(props.Tests);
    // console.log(props.Lang+"llll");
    let classes='about_data';
    let getComp=()=>{
        if(one==0){
            classes='about_data';
            return <KeyboardArrowDownIcon/>
        }else{
            classes='about_data not_display_About'
            return <KeyboardArrowRightIcon/>
        }
        
    }
    return (
        <div className='about_main'>
            <div className='about_top'>
                <div className='about_head' style={{fontSize:'30px'}}>
                    
                    {(props.Lang=='eng')? <span>Your Results</span> : <span style={{fontSize:'35px'}}>आपके परिणाम</span>}
                </div>
                <button className='about_button' onClick={()=>{
                    if(one==0){
                        return setone(1);
                    }else{
                        return setone(0);
                    }
                }}>
                    {getComp()}
                </button>
            </div>
            <div className={classes}>
                {props.Tests.test.map((t,ind)=>{
                    return <ParticularTest test={t} result={props.Tests.results[ind]} Lang={props.Lang}/>
                })}
            </div>
        </div>
    )


}

export default TestParticularProfile
