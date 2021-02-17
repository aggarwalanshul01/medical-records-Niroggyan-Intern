import React,{useEffect} from 'react'
import { Switch , Route, Redirect } from "react-router-dom";
import Dashboard from "./Menu/Dashboard";
import Header from "./Header";
import MasterProfile from './MasterProfile/MasterProfile'
import Tests from '../JsonPassed/Tests';
import AllProfiles from "./MasterProfile/AllProfiles";

const profiles=[];
for(let i=0;i<Tests.length;i++){
    profiles.push(Tests[i].profileName);
}
console.log(profiles);
function Body() {
    
    return (
        <div>
            <Switch >
                {profiles.map((i,index)=>{
                    return <Route exact path={`/${i}`} render={()=><MasterProfile profile={i}/>}/>
                })}
                <Route exact path='/ALL PROFILES' component={AllProfiles}/>
                <Route exact path='/' component={Dashboard}/>
                <Redirect to='/'/>
            </Switch>
        </div>
    )
}

export default Body
