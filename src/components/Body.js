import React,{useEffect} from 'react'
import { Switch , Route, Redirect } from "react-router-dom";
import Dashboard from "./Menu/Dashboard";
import Header from "./Header";
import MasterProfile from './MasterProfile/MasterProfile'
import Tests from '../JsonPassed/Tests';
import AllProfiles from "./MasterProfile/AllProfiles";
import { TEST_DATABASE, TEST_DATABASE_MAPPING, DIC } from "../JsonPassed/testsDatabase";
import testsOriginal from '../JsonPassed/curTestCopy';
import '../css/Body.css';

const profiles=[],map={};
for(let i=0;i< testsOriginal.length;i++){
    if(!map[DIC[TEST_DATABASE_MAPPING[testsOriginal[i].TestName]]]){
    profiles.push(DIC[TEST_DATABASE_MAPPING[testsOriginal[i].TestName]]);
    map[DIC[TEST_DATABASE_MAPPING[testsOriginal[i].TestName]]]=1;
    }
}
// console.log(profiles);

function Body(props) {
    // console.log("lang body="+ props.Lang);
    return (
        <div className='main_bodym' >
            <Switch >
                {profiles.map((i,index)=>{
                    console.log(i);
                    return <Route exact path={`/${i}`} render={()=><MasterProfile profile={i} Lang={props.Lang}/>}/>
                })}
                <Route exact path='/ALL PROFILES' component={()=><AllProfiles profiles={profiles} Lang={props.Lang}/>}/>
                <Route exact path='/' component={()=><Dashboard  Lang={props.Lang}/>}/>
                <Redirect to='/'/>
            </Switch>
        </div>
    )
}

export default Body
