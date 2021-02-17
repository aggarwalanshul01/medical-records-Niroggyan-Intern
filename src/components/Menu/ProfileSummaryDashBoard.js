import React from 'react'
import "../../css/menu/ProfileSummaryDashBoard.css";
import SummaryDashBoard from "../../JsonPassed/ProfileSummaryDashBoard";
import DashboardProfile from "./DashboardProfile";

function ProfileSummaryDashBoard() {
    return (
        <div className='ProfileSummaryDashBoard'>
           {SummaryDashBoard.map((profile)=>{
                return <DashboardProfile data={profile}/>
           })}
        </div>
    )
}

export default ProfileSummaryDashBoard
