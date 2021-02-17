import React from 'react'
import '../../css/menu/Dashboard.css';
import Profile from './Profile';
import Summary from './Summary';
import SpecifyColor from "./SpecifyColor";
import ProfileSummaryDashBoard from "./ProfileSummaryDashBoard";

function Dashboard() {
    return (
        <div>
            <div>
                <Profile/>
            </div>
            <div>
                <Summary/>
            </div>
            <div>
                <SpecifyColor/>
            </div>
            <div>
                <ProfileSummaryDashBoard/>
            </div>
        </div>
    )
}

export default Dashboard
