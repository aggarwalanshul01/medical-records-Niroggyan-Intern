import React,{useState} from 'react';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import '../../css/MasterProfile/ParticularTest.css';
import InfoIcon from '@material-ui/icons/Info';
import CloseIcon from '@material-ui/icons/Close';
import Button from '@material-ui/core/Button';

function ParticularTest(props) {
    let testDetails=props.test;
    const [classBelow, setclassBelow] = useState('data_when_short');
    const getGraphTypeDown=()=>{
        if(testDetails.initialNormalRange==0){
            return (
                <div className='graph_test'>
                <div className='normal_two'>
                        <div className='test_range_division'>{lessThan} {testDetails.higherNormalRange} </div>
                        <div className='normal_two_graph'></div>
                    </div>
                    <div className='high_two'>
                        <div className='test_range_division'>{greaterThan} {testDetails.higherNormalRange}</div>
                        <div className='high_two_graph'> </div>
                    </div>
                    </div>
            )
        }else{
            return(
                <div className='graph_test'>
                    
                    <div className='low_three'>
                        <div className='test_range_division'>{lessThan} {testDetails.initialNormalRange}</div>
                        <div className='low_three_graph'> </div>
                    </div>
                    <div className='normal_three'>
                        <div className='test_range_division'>{testDetails.initialNormalRange} - {testDetails.higherNormalRange}</div>
                        <div className='normal_three_graph'></div>
                    </div>
                    <div className='high_three'>
                        <div className='test_range_division'>{greaterThan} {testDetails.higherNormalRange}</div>
                        <div className='high_three_graph'></div>  
                    </div>
                </div>
            )
        }
    }
    const getGraphType=()=>{
        if(testDetails.initialNormalRange==0){
            return (
                <div className='graph_test'>
                <div className='normal_two'>
                        <div className='test_range_division'>NORMAL</div>
                        <div className='normal_two_graph'>{lessThan} {testDetails.higherNormalRange} </div>
                    </div>
                    <div className='high_two'>
                        <div className='test_range_division'>HIGH</div>
                        <div className='high_two_graph'>{greaterThan} {testDetails.higherNormalRange}</div>
                    </div>
                    </div>
            )
        }else{
            return(
                <div className='graph_test'>
                    
                    <div className='low_three'>
                        <div className='test_range_division'>LOW</div>
                        <div className='low_three_graph'>{lessThan} {testDetails.initialNormalRange} </div>
                    </div>
                    <div className='normal_three'>
                        <div className='test_range_division'>MEDIUM</div>
                        <div className='normal_three_graph'>{testDetails.initialNormalRange} - {testDetails.higherNormalRange}</div>
                    </div>
                    <div className='high_three'>
                        <div className='test_range_division'>HIGH</div>
                        <div className='high_three_graph'>{greaterThan} {testDetails.higherNormalRange}</div>  
                    </div>
                </div>
            )
        }
    }
    let lessThan='<';
    let greaterThan='>';
    const getZoneStatus=()=>{
        if(testDetails.zone=='red'){
            return <span className='specify_one'><FiberManualRecordIcon style={{color:'red'}}/>ABNORMAL</span>;
        }else if(testDetails.zone=='yellow'){
            return <span className='specify_one'><FiberManualRecordIcon style={{color:'rgba(243, 171, 14, 0.767)'}}/>BORDERLINE</span>;
        }
        return <span className='specify_one'><FiberManualRecordIcon style={{color:'green'}}/>NORMAL</span>
    }
    const getZoneStatusDown=()=>{
        if(testDetails.zone=='red'){
            return <span className='specify_one'>{testDetails.testName} <FiberManualRecordIcon style={{color:'red'}}/></span>;
        }else if(testDetails.zone=='yellow'){
            return <span className='specify_one'>{testDetails.testName} <FiberManualRecordIcon style={{color:'rgba(243, 171, 14, 0.767)'}}/></span>;
        }
        return <span className='specify_one'>{testDetails.testName} <FiberManualRecordIcon style={{color:'green'}}/></span>
    }
    return (
        <div className='ParticularTest_main'>
            <div className='ParticularTest_head'>
                <div className='ParticularTest_name'>
                    {testDetails.testName} : {testDetails.result} {testDetails.unit}
                </div>
                <div className='ParticularTest_status'>
                    {getZoneStatus()}
                    
                </div>
                <div className='ParticularTest_status_short' onClick={()=>{
                    setclassBelow('data_when_short show_data')
                }}>
                    <InfoIcon style={{color:'blue'}}/>
                </div>
            </div>
            <div className="test_description">
                {testDetails.description}
            </div>
            <div className='graph_representation'>
                {getGraphType()}
            </div>
            <div className={classBelow}>

                <div className='Particular_test_status_down'>
                    <div className='Particular_test_status_down_one'>{getZoneStatusDown()}</div>
                    <button className='buttonClose_down' onClick={()=>{
                        setclassBelow('data_when_short');
                    }}><CloseIcon/></button>
                    
                </div>
                <div className="test_description_down">
                    {testDetails.description}
                </div>
                <div className='graph_representation_down'>
                    {getGraphTypeDown()}
                </div>
            </div>
        </div>
    )
}

export default ParticularTest
