import React from 'react'
import AboutProfile from './AboutProfile';
import Tests from '../../JsonPassed/Tests';
import TestParticularProfile from './TestParticularProfile';
import '../../css/MasterProfile/MasterProfile.css'


function MasterProfile(props) {
    const getTests=()=>{
        for(let i=0;i<Tests.length;i++){
            if(Tests[i].profileName==props.profile){
                return Tests[i].tests;
            }
        }return null;
    }
    let prof=props.profile;
    return (
        <div>
            <AboutProfile prof={prof}/>
            <TestParticularProfile Tests={getTests()}/>
        </div>
    )
}

export default MasterProfile
