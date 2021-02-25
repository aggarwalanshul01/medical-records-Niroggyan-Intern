import React from 'react'
import '../../css/menu/SpecifyColor.css'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

let colored= { normal: "#0F9D58", finalCritial: "#DB4437", oneFromNormal: "#F4B400", twoFromNormal: "#C47D63", threeFromNormal: "#C26564" };

function SpecifyColor(props) {
    return (
        <div className='colorSpecifyMain'>
            <span className='specify_one'><FiberManualRecordIcon style={{color:'#0F9D58'}}/>{(props.Lang=='eng')? <span>NORMAL</span> : <span>साधारण</span>}</span>
            <span className='specify_one'><FiberManualRecordIcon style={{color:'#F4B400'}}/>{(props.Lang=='eng')? <span>ONE DISTANCE FROM NORMAL</span> : <span>सामान्य से एक दूरी</span>}</span>
            <span className='specify_one'><FiberManualRecordIcon style={{color:'#C47D63'}}/>{(props.Lang=='eng')? <span>TWO DISTANCE FROM NORMAL</span> : <span >सामान्य से दो दूरी</span>}</span>
            <span className='specify_one'><FiberManualRecordIcon style={{color:'#C26564'}}/>{(props.Lang=='eng')? <span>THREE DISTANCE FROM NORMAL</span> : <span >सामान्य से तीन दूरी</span>}</span>
            <span className='specify_one'><FiberManualRecordIcon style={{color:'#DB4437'}}/>{(props.Lang=='eng')? <span>CRITICAL</span> : <span >नाजुक</span>}</span>
        </div>
    )
}

export default SpecifyColor
