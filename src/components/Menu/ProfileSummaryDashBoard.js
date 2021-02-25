import React from 'react'
import "../../css/menu/ProfileSummaryDashBoard.css";
import DashboardProfile from "./DashboardProfile";
import { TEST_DATABASE, TEST_DATABASE_MAPPING, DIC } from "../../JsonPassed/testsDatabase";
import testsOriginal from '../../JsonPassed/curTestCopy';

const profiles=[],map={};
for(let i=0;i< testsOriginal.length;i++){
    if(!map[DIC[TEST_DATABASE_MAPPING[testsOriginal[i].TestName]]]){
    profiles.push(DIC[TEST_DATABASE_MAPPING[testsOriginal[i].TestName]]);
    map[DIC[TEST_DATABASE_MAPPING[testsOriginal[i].TestName]]]=1;
    }
}

function ProfileSummaryDashBoard(props) {
    return (
        <div className='ProfileSummaryDashBoard'>
           {profiles.map((profile)=>{
                return <DashboardProfile data={profile} Lang={props.Lang}/>
           })}
        </div>
    )
}

export default ProfileSummaryDashBoard
