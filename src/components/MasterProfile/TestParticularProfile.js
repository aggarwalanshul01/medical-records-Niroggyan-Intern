import React,{useState} from 'react'
import '../../css/MasterProfile/TestParticularProfile.css'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

import ParticularTest from './ParticularTest';

function TestParticularProfile(props) {
    const [one, setone] = useState(0);
    // console.log(props.Tests);
    
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
                <div className='about_head'>
                    Your Results
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
                {props.Tests.map((test)=>{
                    return <ParticularTest test={test}/>
                })}
            </div>
        </div>
    )


}

export default TestParticularProfile
