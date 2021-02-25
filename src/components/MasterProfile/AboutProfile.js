import React,{useState} from 'react'
import '../../css/MasterProfile/AboutProfile.css';
import NamesWithAbout from '../../data/ProfileNames';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import Button from '@material-ui/core/Button';
import AboutProfiles from "../../JsonPassed/AboutProfiles";

function AboutUs(props) {
    const [one, setone] = useState(0);

    let getAbout=()=>{
        if(!AboutProfiles[props.prof]){
            return 
        }
        if(props.Lang=='hindi'&&AboutProfiles[props.prof].hindi)
            return AboutProfiles[props.prof].hindi;
        else if(AboutProfiles[props.prof].en){
            return AboutProfiles[props.prof].en;
        }
            
    }
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
            <div className='about_top' style={{color:'blue'}}>
                <div className='about_head'>
                    {props.prof}
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
                {getAbout()}
            </div>
        </div>
    )
}

export default AboutUs
