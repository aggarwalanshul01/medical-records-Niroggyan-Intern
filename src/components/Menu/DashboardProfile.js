import React from 'react'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function DashboardProfile(props) {
    return (

        <div className='particuler_profile_main'>
            <div className='particuler_profile_name'>
                {props.data.profileName}
            </div>
            <div className='profile_data'>
                <div className="heading_tests">
                    <div className="test_name_head">Test Name</div>
                    <div className="result_head">Result(unit)</div>
                    <div className="normal_range_head">Normal Range</div>
                </div>
                {props.data.tests.map((test)=>{
                    //console.log(test);
                    let color='green';
                    if(test.zone=='red'){
                        color='red';
                    }else if(test.zone=='yellow'){
                        color='rgba(243, 171, 14, 0.767)';
                    }
                    return(
                        <div className="_tests">
                        {
                            
                            <div className="test_name_"><FiberManualRecordIcon style={{marginTop:'-4px', color:`${color}`}}/><span style={{marginTop:'0px'}}>{test.testName}</span></div>}
                        <div className="result_">{test.result}{test.unit}</div>
                        <div className="normal_range_">{test.initialNormalRange} - {test.higherNormalRange}</div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default DashboardProfile