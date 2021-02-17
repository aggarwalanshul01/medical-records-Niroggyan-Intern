import React from 'react'
import '../../css/menu/SpecifyColor.css'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function SpecifyColor() {
    return (
        <div className='colorSpecifyMain'>
            <span className='specify_one'><FiberManualRecordIcon style={{color:'green'}}/>NORMAL</span>
            <span className='specify_one'><FiberManualRecordIcon style={{color:'rgba(243, 171, 14, 0.767)'}}/>BORDERLINE</span>
            <span className='specify_one'><FiberManualRecordIcon style={{color:'red'}}/>ABNORMAL</span>
        </div>
    )
}

export default SpecifyColor
