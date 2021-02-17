import React from 'react'
import Tests from "../../JsonPassed/Tests";
import MasterProfile from "./MasterProfile";

const profiles=[];
for(let i=0;i<Tests.length;i++){
    profiles.push(Tests[i].profileName);
}

function AllProfiles() {
    return (
        <div>
            {profiles.map((i,index)=>{
                return <MasterProfile profile={i}/>
            })}
        </div>
    )
}

export default AllProfiles
