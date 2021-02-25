import React from 'react'
import AboutProfile from './AboutProfile';
import Tests from '../../JsonPassed/Tests';
import TestParticularProfile from './TestParticularProfile';
import '../../css/MasterProfile/MasterProfile.css';
import { TEST_DATABASE, TEST_DATABASE_MAPPING, DIC } from "../../JsonPassed/testsDatabase";
import testsOriginal from '../../JsonPassed/curTestCopy';
import Tips from './Tips';
import tips from "../../JsonPassed/Tips";


function MasterProfile(props) {
    // console.log("Manster" + props.Lang+" "+props.profile);
    const getTests=()=>{
        let tests={test:[],results:[]};
        
        for(let i=0;i<testsOriginal.length;i++){
            if(DIC[TEST_DATABASE_MAPPING[testsOriginal[i].TestName]]==props.profile){
                tests.test.push(TEST_DATABASE_MAPPING[testsOriginal[i].TestName]);
                tests.results.push(testsOriginal[i].TestResultValue);
            }
        }
        return tests;
    }
    let prof=props.profile;
    return (
        <div>
            <AboutProfile prof={prof} Lang={props.Lang}/>
            <TestParticularProfile Tests={getTests()} Lang={props.Lang}/>

            {tips[prof]&&<Tips Lang={props.Lang} profileName={prof}/>}
        </div>
    )
}

export default MasterProfile
