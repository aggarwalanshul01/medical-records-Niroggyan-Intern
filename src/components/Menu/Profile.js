import React from 'react'
import '../../css/menu/Profile.css';
import ActualTests from "../../JsonPassed/curTestCopy";

let P_name=ActualTests[0].PName;
let Gender=ActualTests[0].Gender;
let Age=ActualTests[0].Age;
let LabID=ActualTests[0].LabID;
let SamplecollectedDate=ActualTests[0].SamplecollectedDate;
let collectedby=ActualTests[0].collectedby;
let center=ActualTests[0].center;

function Profile() {
    return (
        <div className='main_profile'>
            <img className='imgUser' src='./img/BoyDemo.jpg' alt='Photo' width='50px' />
            <div className='entities'>
                <h2 className='firstHead'>{P_name}</h2>
                <h5 className='firstHead'>{Gender}, {Age} old</h5>
            </div>
            <div className='entities1'>
                <h5 className='afterHead firstHead'>Lab ID : {LabID}</h5>
                <h5 className='afterHead firstHead'>Date : {SamplecollectedDate.split(' ')[0]}</h5>
            </div>
            <div className='entities2'>
                <h5 className='afterHead firstHead'>Center : {center}</h5>
                <h5 className='afterHead firstHead'>Collected By : {collectedby}</h5>
            </div>
        </div>
    )
}

export default Profile
