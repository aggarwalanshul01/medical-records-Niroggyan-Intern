import React from 'react'
import '../../css/menu/Dashboard.css';
import Profile from './Profile';
import Summary from './Summary';
import SpecifyColor from "./SpecifyColor";
import ProfileSummaryDashBoard from "./ProfileSummaryDashBoard";

function Dashboard(props) {
    return (
        <div>
            <div>
                <Profile Lang={props.Lang}/>
            </div>
            <div>
                <Summary Lang={props.Lang}/>
            </div>
            <div>
                <SpecifyColor Lang={props.Lang}/>
            </div>
            <div>
                <ProfileSummaryDashBoard Lang={props.Lang}/>
            </div>
        </div>
    )
}

export default Dashboard
