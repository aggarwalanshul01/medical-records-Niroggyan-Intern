import React from 'react'
import Tests from "../../JsonPassed/Tests";
import MasterProfile from "./MasterProfile";
import { TEST_DATABASE, TEST_DATABASE_MAPPING, DIC } from "../../JsonPassed/testsDatabase";
import actualTests from '../../JsonPassed/curTestCopy';



function AllProfiles(props) {
    const profiles=props.profiles;
    return (
        <div>
            {profiles.map((i,index)=>{
                return <MasterProfile profile={i} Lang={props.Lang}/>
            })}
        </div>
    )
}

export default AllProfiles
