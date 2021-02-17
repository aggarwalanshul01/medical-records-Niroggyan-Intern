import React from 'react'
import '../../css/menu/Summary.css'
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';

function Summary() {
    return (
        <div className='topSum'>
        <div className='main_summary'>
            <div className='entities_sum first_leave'>
                <h3 className='firstHead_sum '>
                    <InsertEmoticonIcon fontSize='large' style={{color:'green' , marginRight:'5px'}}/><span>YOUR NORMAL PROFILE</span>
                </h3>
                <h4 className='firstHead_sum1'>Thyroid Profile, Vitamin Profile, Electrolyte Profile, Arthritis Screening, Vitamin D</h4>
            </div>
            <div className='entities_sum'>
                <h3 className='firstHead_sum'><SentimentDissatisfiedIcon fontSize='large' style={{color:'rgba(243, 171, 14, 0.767)', marginRight:'5px'}}/><span>YOUR BORDERLINE PROFILE</span></h3>
                <h4 className='firstHead_sum1'>Kidney Profile, Lipid Profile, Liver Profile, Urinalysis, Blood Counts, Anemia Studies</h4>
            </div>
            <div className='entities_sum'>
                <h3 className='firstHead_sum'><SentimentVeryDissatisfiedIcon fontSize='large' style={{color:'red', marginRight:'5px'}}/><span>YOUR ABNORMAL PROFILE</span></h3>
                <h4 className='firstHead_sum1'>Diabetes Monitoring</h4>
            </div>
            
        </div>
        <hr style={{marginRight:'10px',marginLeft:'10px', marginTop:'20px'}}/>
        <div className='suggest_text'>
            Anshul Aggarwal, as a 20 year old male, regular testing is a very important way to keep track of your overall physical well-being. Here's the summary of your reports, and moreover you can either <b>search or click on particular profile from left menu</b> to go to that particular section.
        </div>
        </div>
    )
}

export default Summary
